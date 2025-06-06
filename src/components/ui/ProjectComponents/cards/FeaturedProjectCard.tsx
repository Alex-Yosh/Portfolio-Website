import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/imported/card";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import TechPills from "../../Pills/TechPills";
import TypePills from "../../Pills/TypePills";
import AppIcon from "../../extra/AppIcon";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 flex flex-col h-full rounded-lg overflow-hidden shadow-md transition-all hover:border-blue-500">
      <Link
        href={`/project/${project.id}`}
        className="block hover:scale-[1.02] transition-transform duration-300 h-full"
      >
        {/* Image with fade */}
        <CardHeader className="p-0">
          <div className="relative w-full h-[300px] overflow-hidden">
            <Image
              src={project.screenshot || "/placeholder.svg"}
              alt={project.name}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-800 to-transparent" />
          </div>
        </CardHeader>

        {/* Text & tags */}
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <AppIcon iconUrl={project.icon} />
            <div>
              <div>
                <CardTitle className="text-white mb-4">
                  {project.name}
                </CardTitle>
                <TypePills types={project.type} />
              </div>
            </div>
          </div>

          <CardDescription className="text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </CardDescription>

          <TechPills technologies={project.technologies} />
        </CardContent>
      </Link>
    </Card>
  );
}
