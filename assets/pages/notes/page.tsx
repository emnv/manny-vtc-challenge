import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { Plus, Search, StickyNote, X } from "lucide-react";
import { MainLayout } from "../../components/layout/MainLayout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { NoteCard } from "../../components/notes/NoteCard";
import { NoteForm } from "../../components/notes/NoteForm";
import { DeleteConfirmDialog } from "../../components/notes/DeleteConfirmDialog";
import { NotesGridSkeleton } from "../../components/notes/NotesSkeleton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "../../components/ui/sheet";
import { Badge } from "../../components/ui/badge";

interface Note {
  id: number;
  title: string;
  content: string;
  category: string;
  status: "new" | "todo" | "done";
  createdAt: string;
  updatedAt: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  
  // Modals
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [viewingNote, setViewingNote] = useState<Note | null>(null);
  const [deleteNoteId, setDeleteNoteId] = useState<number | null>(null);

  const fetchNotes = useCallback(async () => {
    
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (statusFilter && statusFilter !== "all") params.append("status", statusFilter);
      if (categoryFilter && categoryFilter !== "all") params.append("category", categoryFilter);

      const response = await fetch(`/api/notes?${params}`);
      if (!response.ok) throw new Error("Failed to fetch notes");
      
      const data = await response.json();
      setNotes(data.notes || []);
      setCategories(data.categories || []);
    } catch (error) {
      toast.error("Failed to load notes");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, categoryFilter]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const handleCreateNote = async (data: { title: string; content: string; category: string; status: string }) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to create note");
      
      toast.success("Note created successfully!");
      setIsFormOpen(false);
      fetchNotes();
    } catch (error) {
      toast.error("Failed to create note");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateNote = async (data: { title: string; content: string; category: string; status: string }) => {
    if (!editingNote) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/notes/${editingNote.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update note");
      
      toast.success("Note updated successfully!");
      setIsFormOpen(false);
      setEditingNote(null);
      fetchNotes();
    } catch (error) {
      toast.error("Failed to update note");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteNote = async (id: number) => {
    setDeleteNoteId(id);
  };

  const confirmDelete = async () => {
    if (!deleteNoteId) return;
    
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/notes/${deleteNoteId}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete note");
      
      toast.success("Note deleted");
      setDeleteNoteId(null);
      fetchNotes();
    } catch (error) {
      toast.error("Failed to delete note");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = (note: Note) => {
    setEditingNote(note);
    setIsFormOpen(true);
  };

  const handleView = (note: Note) => {
    setViewingNote(note);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingNote(null);
  };

  const handleCloseView = (open?: boolean) => {
    if (open === false || open === undefined) {
      setViewingNote(null);
    }
  };

  const handleSubmit = editingNote ? handleUpdateNote : handleCreateNote;

  return (
    <MainLayout title="My Notes" isLoading={isLoading}>
      {/* Toolbar */}
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search and Filters */}
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-9 w-[140px]">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="todo">Todo</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="h-9 w-[160px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setSearch("");
                setStatusFilter("all");
                setCategoryFilter("all");
              }}
              disabled={!search && statusFilter === "all" && categoryFilter === "all"}
            >
              <X className="mr-2 h-4 w-4" />
              Clear
            </Button>
            <Button onClick={() => setIsFormOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Note
            </Button>
          </div>
        </div>
      </div>

      {/* Notes Grid */}
      {isLoading ? (
        <NotesGridSkeleton count={6} />
      ) : notes.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-white p-12"
        >
          <StickyNote className="mb-4 h-12 w-12 text-gray-300" />
          <h3 className="mb-2 text-lg font-semibold text-gray-900">No notes yet</h3>
          <p className="mb-4 text-sm text-gray-500">
            {search || statusFilter || categoryFilter
              ? "No notes match your filters"
              : "Create your first note to get started"}
          </p>
          {!search && !statusFilter && !categoryFilter && (
            <Button onClick={() => setIsFormOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Create Note
            </Button>
          )}
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {notes.map((note, index) => (
              <NoteCard
                key={note.id}
                note={note}
                onEdit={handleEdit}
                onDelete={handleDeleteNote}
                onView={handleView}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Note Details Sheet */}
      <Sheet open={viewingNote !== null} onOpenChange={handleCloseView}>
        <SheetContent side="right" className="flex flex-col">
          {viewingNote && (
            <>
              <SheetHeader className="mb-4">
                <SheetTitle>{viewingNote.title}</SheetTitle>
                <SheetDescription className="flex flex-wrap items-center gap-2">
                  <Badge variant={viewingNote.status}>{viewingNote.status}</Badge>
                  {viewingNote.category && (
                    <span className="text-xs text-gray-500">{viewingNote.category}</span>
                  )}
                  <span className="text-xs text-gray-400">
                    {new Date(viewingNote.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </SheetDescription>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto">
                <p className="whitespace-pre-line break-words text-sm text-gray-700">
                  {viewingNote.content}
                </p>
              </div>

              <SheetFooter className="mt-6 border-t border-gray-200 pt-4">
                <Button variant="outline" onClick={() => setViewingNote(null)}>
                  Close
                </Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* Note Form Sheet */}
      <NoteForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onSubmit={handleSubmit}
        note={editingNote}
        isSubmitting={isSubmitting}
      />

      {/* Delete Confirm Dialog */}
      <DeleteConfirmDialog
        isOpen={deleteNoteId !== null}
        onClose={() => setDeleteNoteId(null)}
        onConfirm={confirmDelete}
        isDeleting={isDeleting}
      />
    </MainLayout>
  );
}
