import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/imported/card";
import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/imported/button";
import Image from "next/image";
import { Project } from "@/data/projects";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 flex flex-col justify-between h-full min-h-[450px] rounded-lg overflow-hidden shadow-md transition-all hover:border-blue-500">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.screenshot || "/placeholder.svg"}
            alt={project.name}
            width={400}
            height={200}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              <Button size="sm" variant="secondary" asChild>
                <Link href={`/project/${project.id}`}>View Details</Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-white mb-2">{project.name}</CardTitle>
        <CardDescription className="text-gray-400 mb-4">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-600 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
