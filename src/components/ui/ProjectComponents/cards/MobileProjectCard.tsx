// MobileProjectCard.tsx
import { Button } from "@/components/ui/imported/button";
import { Badge } from "@/components/ui/imported/badge";
import { Calendar, Users, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ProjectsPageText } from "@/data/strings";
import TypePills from "../../Pills/TypePills";
import AppIcon from "../../extra/AppIcon";

const renderDeviceMockup = (project: Project) => {
  if (project.type.includes("iOS")) {
    return (
      <div className="relative w-[280px] mx-auto md:mx-0">
        <div className="relative w-[280px] h-[570px] rounded-[36px] border-[10px] border-gray-800 overflow-hidden shadow-lg bg-black">
          <Image
            src={project.screenshot || "/placeholder.svg"}
            alt={project.name}
            fill
            className="object-cover absolute inset-0"
          />
          <div className="absolute bottom-2 left-0 right-0 mx-auto w-1/3 h-1 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative w-[280px] mx-auto md:mx-0">
        <div className="relative w-[280px] h-[570px] rounded-[24px] border-[8px] border-gray-800 overflow-hidden shadow-lg bg-black box-border">
          <Image
            src={project.screenshot || "/placeholder.svg"}
            alt={project.name}
            fill
            className="object-cover absolute inset-0"
          />
        </div>
      </div>
    );
  }
};

export default function MobileProjectCard({ project }: { project: Project }) {
  return (
    <div className="group min-h-[600px]">
      <div className="flex flex-col md:flex-row gap-6 items-stretch h-full">
        {renderDeviceMockup(project)}

        <div className="flex-1 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex items-start gap-4">
              <AppIcon iconUrl={project.icon} />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                <TypePills types={project.type} />
                <p className="text-gray-400 mb-1">{project.category}</p>
                <Badge
                  variant="outline"
                  className="border-blue-500 text-blue-400"
                >
                  {project.status}
                </Badge>
              </div>
            </div>
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

          <p className="text-gray-300 mb-6">{project.description}</p>

          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-2">
              {ProjectsPageText.technologies}
            </p>
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
          </div>

          <div className="flex space-x-4 mt-auto mb-8">
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
