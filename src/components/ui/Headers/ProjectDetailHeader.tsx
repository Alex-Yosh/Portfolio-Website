import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/imported/button";

interface ProjectDetailHeaderProps {
  project: Project;
}

export default function ProjectDetailHeader({
  project,
}: ProjectDetailHeaderProps) {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/project"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mr-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link
                  href={project.screenshot}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
