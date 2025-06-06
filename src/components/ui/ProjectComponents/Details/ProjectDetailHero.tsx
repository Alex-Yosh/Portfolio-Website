import { Project } from "@/data/projects";
import TypePills from "../../Pills/TypePills";
import TechPills from "../../Pills/TechPills";
import AppIcon from "../../extra/AppIcon";

interface ProjectDetailsHeroProps {
  project: Project;
}
export default function ProjectDetailHero({
  project,
}: ProjectDetailsHeroProps) {
  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <AppIcon iconUrl={project.icon} />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {project.name}
              </h1>
              <TypePills types={project.type} />
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl">
            {project.description}
          </p>
          <TechPills technologies={project.technologies} />
        </div>

        {/* <div className="relative rounded-lg overflow-hidden mb-12">
          <Image
            src={project.screenshot || "/placeholder.svg"}
            alt={project.name}
            width={800}
            height={400}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        </div> */}
      </div>
    </section>
  );
}
