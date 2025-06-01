import ProjectDetail from "@/components/ui/ProjectComponents/Details/ProjectDetail";
import { projectList } from "@/data/projects";
import Footer from "@/components/ui/Footers/Footer";
import ProjectDetailHeader from "@/components/ui/Headers/ProjectDetailHeader";
import ProjectDetailHero from "@/components/ui/ProjectComponents/Details/ProjectDetailHero";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectList.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ProjectDetailHeader project={project} />

      {/* Hero Section */}
      <ProjectDetailHero project={project} />

      <ProjectDetail project={project} />
      {/* Footer */}
      <Footer />
    </div>
  );
}
