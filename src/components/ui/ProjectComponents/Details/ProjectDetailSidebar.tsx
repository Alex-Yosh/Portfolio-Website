import { Button } from "@/components/ui/imported/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/imported/card";
import { Badge } from "@/components/ui/imported/badge";
import { ExternalLink, Github, Calendar, Users, Code } from "lucide-react";
import { Project } from "@/data/projects";
import Link from "next/link";

interface ProjectDetailSidebarProps {
  project: Project;
}

export default function ProjectDetailSidebar({
  project,
}: ProjectDetailSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Project Info */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Project Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Duration</p>
              <p className="text-white">{project.duration}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Team Size</p>
              <p className="text-white">{project.teamSize}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Code className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Status</p>
              <p className="text-white">{project.status}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technologies */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Technologies Used</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-blue-500 text-blue-400"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Project Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link
              href="https://github.com/example/fittracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View Source Code
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full border-gray-600 text-white hover:bg-gray-700"
          >
            <Link
              href="https://fittracker-demo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {project.status === "In Development"
                ? "View Progress"
                : "Live Demo"}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
