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

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 flex flex-col justify-between h-full min-h-[450px] rounded-lg overflow-hidden shadow-md transition-all hover:border-blue-500">
      <Link
        href={`/project/${project.id}`}
        className="block hover:scale-[1.02] transition-transform duration-300"
      >
        <CardHeader className="p-0">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={project.screenshot || "/placeholder.svg"}
              alt={project.name}
              width={400}
              height={200}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-white mb-2">{project.name}</CardTitle>
          <TypePills types={project.type} />
          <CardDescription className="text-gray-400 mb-4">
            {project.description}
          </CardDescription>
          <TechPills technologies={project.technologies} />
        </CardContent>
      </Link>
    </Card>
  );
}
