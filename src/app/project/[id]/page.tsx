import ProjectDetail from "@/components/ui/ProjectComponents/ProjectDetail";
import { projectList } from "@/data/projects";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectList.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Project not found.
      </div>
    );
  }

  return <ProjectDetail project={project} />;
}
