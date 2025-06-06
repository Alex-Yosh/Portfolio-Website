"use client";

import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/imported/input";
import { ProjectHeaderText } from "@/data/strings";

interface ProjectHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function ProjectHeader({
  searchQuery,
  onSearchChange,
}: ProjectHeaderProps) {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mr-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {ProjectHeaderText.backButton}
            </Link>
            <h1 className="hidden sm:block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {ProjectHeaderText.title}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder={ProjectHeaderText.search}
                className="pl-10 bg-gray-800 border-gray-700 text-white w-64"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
