"use client";

import { useHasMounted } from "@/hooks/useHasMounted";
import { useInView } from "@/hooks/useInView";
import { use } from "react";

import { projectList } from "@/data/projects";
import Footer from "@/components/ui/Footers/Footer";
import ProjectDetailHeader from "@/components/ui/Headers/ProjectDetailHeader";
import ProjectDetailHero from "@/components/ui/ProjectComponents/Details/ProjectDetailHero";
import ProjectDetailOverview from "@/components/ui/ProjectComponents/Details/ProjectDetailOverview";
import ProjectDetailFeature from "@/components/ui/ProjectComponents/Details/ProjectDetailFeature";
import ProjectDetailChallengeSolution from "@/components/ui/ProjectComponents/Details/ProjectDetailChallangeSolution";
import ProjectDetailGallary from "@/components/ui/ProjectComponents/Details/ProjectDetailGallery";
import ProjectDetailSidebar from "@/components/ui/ProjectComponents/Details/ProjectDetailSidebar";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projectList.find((p) => p.id === id);
  const hasMounted = useHasMounted();

  const { ref: heroRef, isInView: heroInView } = useInView(0.2);
  const { ref: overviewRef, isInView: overviewInView } = useInView(0.2);
  const { ref: featuresRef, isInView: featuresInView } = useInView(0.2);
  const { ref: challengesRef, isInView: challengesInView } = useInView(0.2);
  const { ref: galleryRef, isInView: galleryInView } = useInView(0.2);
  const { ref: sidebarRef, isInView: sidebarInView } = useInView(0.2);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ProjectDetailHeader project={project} />
      <div
        ref={heroRef}
        className={`transition-all duration-700 ease-out transform ${
          hasMounted && heroInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <ProjectDetailHero project={project} />
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div
                ref={overviewRef}
                className={`transition-all duration-700 ease-out transform ${
                  hasMounted && overviewInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                <ProjectDetailOverview
                  longDescription={project.longDescription}
                />
              </div>

              {/* Features */}
              <div
                ref={featuresRef}
                className={`transition-all duration-700 ease-out transform ${
                  hasMounted && featuresInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                <ProjectDetailFeature features={project.features} />
              </div>

              {/* Challenges & Solutions */}
              <div
                ref={challengesRef}
                className={`transition-all duration-700 ease-out transform ${
                  hasMounted && challengesInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                <ProjectDetailChallengeSolution
                  challenges={project.challenges}
                  solutions={project.solutions}
                />
              </div>

              {/* Gallery */}
              <div
                ref={galleryRef}
                className={`transition-all duration-700 ease-out transform ${
                  hasMounted && galleryInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-y-10"
                }`}
              >
                <ProjectDetailGallary gallery={project.gallery} />
              </div>
            </div>

            {/* Sidebar (from right) */}
            <div
              ref={sidebarRef}
              className={`transition-all duration-700 ease-out transform ${
                hasMounted && sidebarInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <ProjectDetailSidebar project={project} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
