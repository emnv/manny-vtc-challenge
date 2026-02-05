import React from "react";
import { motion } from "framer-motion";
import { StickyNote, LogOut, User, X } from "lucide-react";
import { cn } from "../../lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onLogout: () => void;
  userEmail?: string;
}

const navItems = [
  { icon: StickyNote, label: "Notes", href: "/notes", active: true },
];

export function Sidebar({ isOpen, onToggle, onLogout, userEmail }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isOpen ? 256 : 0,
          x: isOpen ? 0 : -256,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={cn(
          "fixed left-0 top-0 z-50 h-screen bg-gray-900 text-white lg:relative lg:z-auto",
          isOpen ? "w-64" : "w-0 lg:w-0"
        )}
      >
        <div className="flex h-full flex-col overflow-hidden">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between border-b border-gray-800 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <StickyNote className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">VTC Notes</span>
            </motion.div>
            <button
              onClick={onToggle}
              className="rounded-md p-1.5 hover:bg-gray-800 lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  item.active
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </a>
            ))}
          </nav>

          {/* User section with dropdown */}
          <div className="border-t border-gray-800 p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex w-full items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-800 transition-colors">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700">
                    <User className="h-5 w-5 text-gray-300" />
                  </div>
                  <div className="flex-1 truncate text-left">
                    <p className="truncate text-sm font-medium" title={userEmail || "User"}>
                      {userEmail || "User"}
                    </p>
                    <p className="text-xs text-gray-400">Logged in</p>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Account</p>
                    <p className="text-xs leading-none text-gray-500 truncate">
                      {userEmail || "User"}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={onLogout}
                  className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
