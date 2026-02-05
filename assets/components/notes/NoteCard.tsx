import React from "react";
import { motion } from "framer-motion";
import { Pencil, Trash2, Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface Note {
  id: number;
  title: string;
  content: string;
  category: string;
  status: "new" | "todo" | "done";
  createdAt: string;
  updatedAt: string;
}

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
  onView: (note: Note) => void;
  index?: number;
}

export function NoteCard({ note, onEdit, onDelete, onView, index = 0 }: NoteCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      layout
    >
      <Card
        className="group flex h-[240px] cursor-pointer flex-col overflow-hidden transition-shadow hover:shadow-md"
        onClick={() => onView(note)}
      >
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="line-clamp-1 text-base">{note.title}</CardTitle>
            <Badge variant={note.status}>{note.status}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <p className="max-h-[4.5rem] overflow-hidden whitespace-pre-line break-words text-sm text-gray-600">
            {note.content}
          </p>
        </CardContent>
        <CardFooter className="mt-auto flex items-center justify-between border-t border-gray-200 pt-3">
          <div className="flex flex-col gap-1 text-xs text-gray-500">
            {note.category && (
              <div className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                <span>{note.category}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(note.createdAt)}</span>
            </div>
          </div>
          <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            <Button
              variant="ghost"
              size="icon"
              onClick={(event) => {
                event.stopPropagation();
                onEdit(note);
              }}
              className="h-8 w-8"
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={(event) => {
                event.stopPropagation();
                onDelete(note.id);
              }}
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
