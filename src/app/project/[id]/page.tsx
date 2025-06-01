import { projectList } from "@/data/projects";
import Footer from "@/components/ui/Footers/Footer";
import ProjectDetailHeader from "@/components/ui/Headers/ProjectDetailHeader";
import ProjectDetailHero from "@/components/ui/ProjectComponents/Details/ProjectDetailHero";
import ProjectDetailOverview from "@/components/ui/ProjectComponents/Details/ProjectDetailOverview";
import ProjectDetailFeature from "@/components/ui/ProjectComponents/Details/ProjectDetailFeature";
import ProjectDetailChallengeSolution from "@/components/ui/ProjectComponents/Details/ProjectDetailChallangeSolution";
import ProjectDetailGallary from "@/components/ui/ProjectComponents/Details/ProjectDetailGallery";
import ProjectDetailSidebar from "@/components/ui/ProjectComponents/Details/ProjectDetailSidebar";

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

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <ProjectDetailOverview
                longDescription={project.longDescription}
              />

              {/* Features */}
              <ProjectDetailFeature features={project.features} />

              {/* Challenges & Solutions */}
              <ProjectDetailChallengeSolution
                challenges={project.challenges}
                solutions={project.solutions}
              />

              {/* Gallery */}
              <ProjectDetailGallary gallery={project.gallery} />
            </div>

            {/* Sidebar */}
            <ProjectDetailSidebar project={project} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
