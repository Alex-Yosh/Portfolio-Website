"use client";

import ProjectHeader from "@/components/ui/Headers/ProjectHeader";
import TypeFilter from "@/components/ui/Filters/ProjectFilter";
import { useState } from "react";

import { projectList } from "@/data/projects";
import NoProjectsFound from "@/components/ui/ProjectComponents/NoProjectsFound";
import ProjectList from "@/components/ui/ProjectComponents/ProjectList";

export default function Project() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const types = Array.from(new Set(projectList.map((project) => project.type)));

  // Filter apps based on search and filters
  const filteredProjects = projectList.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType ? project.type === selectedType : true;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      {/* Header with navigation */}
      <ProjectHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <TypeFilter
          selectedType={selectedType}
          types={types}
          setSelectedType={setSelectedType}
        />
        {filteredProjects.length === 0 ? (
          <NoProjectsFound />
        ) : (
          <div className="space-y-16">
            <ProjectList projects={filteredProjects} />
          </div>
        )}
      </main>
    </div>
  );
}
