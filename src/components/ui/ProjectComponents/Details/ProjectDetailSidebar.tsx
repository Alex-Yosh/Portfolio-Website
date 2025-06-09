import { Button } from "@/components/ui/imported/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/imported/card";
import { Badge } from "@/components/ui/imported/badge";
import { Github, Calendar, Users, Code } from "lucide-react";
import { isPhonePlatform, Project } from "@/data/projects";
import Link from "next/link";
import { ProjectsDetailsText } from "@/data/strings";
import { useState } from "react";
import VideoModal from "../../extra/VideoPopupButton";

interface ProjectDetailSidebarProps {
  project: Project;
}

export default function ProjectDetailSidebar({
  project,
}: ProjectDetailSidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      {/* Project Info */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">
            {ProjectsDetailsText.projectInfo}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">
                {ProjectsDetailsText.duration}
              </p>
              <p className="text-white">{project.duration}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">
                {ProjectsDetailsText.teamSize}
              </p>
              <p className="text-white">{project.teamSize}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Code className="w-5 h-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">
                {ProjectsDetailsText.status}
              </p>
              <p className="text-white">{project.status}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technologies */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">
            {ProjectsDetailsText.techUsed}
          </CardTitle>
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
          <CardTitle className="text-white">
            {ProjectsDetailsText.projectLinks}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {project.githubUrl && (
            <Button
              asChild
              variant="outline"
              className="w-full border-gray-600 text-white hover:bg-gray-700"
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                {ProjectsDetailsText.viewSourceCode}
              </Link>
            </Button>
          )}
          {project.extraUrl && project.extraUrlLabel && (
            <Button
              asChild
              variant="outline"
              className="w-full border-gray-600 text-white hover:bg-gray-700"
            >
              <Link
                href={project.extraUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.extraUrlLabel}
              </Link>
            </Button>
          )}
          {project.video && (
            <>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => setOpen(true)}
              >
                {ProjectsDetailsText.liveDemo}
              </Button>

              {open && (
                <VideoModal
                  videoUrl={project.video}
                  onClose={() => setOpen(false)}
                  phoneRes={isPhonePlatform(project)}
                />
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
