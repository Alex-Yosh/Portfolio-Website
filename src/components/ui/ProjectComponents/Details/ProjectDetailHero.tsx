import { Project } from "@/data/projects";
import Image from "next/image";
import { Badge } from "@/components/ui/imported/badge";

interface ProjectDetailsHeroProps {
  project: Project;
}
export default function ProjectDetailHero({
  project,
}: ProjectDetailsHeroProps) {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {project.name}
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-gray-800 text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden mb-12">
          <Image
            src={project.screenshot || "/placeholder.svg"}
            alt={project.name}
            width={800}
            height={400}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
