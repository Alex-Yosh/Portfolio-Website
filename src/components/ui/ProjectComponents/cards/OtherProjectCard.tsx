import { Button } from "@/components/ui/imported/button";
import { Badge } from "@/components/ui/imported/badge";
import { Calendar, Users, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ProjectsPageText } from "@/data/strings";
import TypePills from "../../Pills/TypePills";
import AppIcon from "../../extra/AppIcon";

export default function OtherProjectCard({ project }: { project: Project }) {
  return (
    <div className="group">
      <div className="flex flex-col gap-4 items-stretch">
        {project.screenshot && (
          <div className="w-full max-h-[300px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={project.screenshot}
              alt={project.name}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-3 mb-3">
            <div className="flex items-start gap-4">
              <AppIcon iconUrl={project.icon} />
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="text-xl font-semibold leading-snug">
                    {project.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-blue-400 mr-2" />
                      <div>
                        <p className="text-sm text-gray-400">
                          {ProjectsPageText.teamSize}
                        </p>
                        <p className="font-semibold">{project.teamSize}</p>
                      </div>
                    </div>
                    {project.status === "Completed" && (
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                        <div>
                          <p className="text-sm text-gray-400">
                            {ProjectsPageText.completed}
                          </p>
                          <p className="font-semibold">
                            {new Date(project.completedDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                              }
                            )}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <TypePills types={project.type} />
                <p className="text-gray-400 text-sm leading-tight">
                  {project.category}
                </p>
                <Badge
                  variant="outline"
                  className="border-blue-500 text-blue-400 mt-1"
                >
                  {project.status}
                </Badge>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-2 line-clamp-3 leading-snug">
            {project.description}
          </p>

          <div className="mb-3">
            <p className="text-xs text-gray-400 mb-1">
              {ProjectsPageText.technologies}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-blue-500 text-blue-400 text-xs px-2 py-0.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex space-x-4 mt-auto">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href={`/project/${project.id}`}>
                {ProjectsPageText.viewDetails}
              </Link>
            </Button>
            {project.githubUrl && (
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
                  {ProjectsPageText.viewCode}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
