import React from "react";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
  title?: string;
}

export function Header({ onMenuClick, title = "Notes" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 lg:px-6">
      {/* Menu button */}
      <button
        onClick={onMenuClick}
        className="rounded-md p-2 hover:bg-gray-100 lg:hidden"
      >
        <Menu className="h-5 w-5 text-gray-600" />
      </button>

      {/* Title */}
      <h1 className="text-lg font-semibold text-gray-900 lg:text-xl">{title}</h1>

      {/* Spacer */}
      <div className="flex-1" />
    </header>
  );
}
