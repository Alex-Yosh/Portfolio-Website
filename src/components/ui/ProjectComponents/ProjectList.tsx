import ProjectCard from "./ProjectCard";
import { Project } from "@/data/projects";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
