"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Link from "next/link";
import { Button } from "@/components/ui/imported/button";
import { projectList } from "@/data/projects";
import { useInView } from "@/hooks/useInView";
import { useHasMounted } from "@/hooks/useHasMounted";
import { ArrowRight } from "lucide-react";
import FeaturedProjectCard from "./ui/ProjectComponents/cards/FeaturedProjectCard";
import { ProjectsText } from "@/data/strings";

export default function Projects() {
  const featuredProjects = projectList.filter((project) => project.isFeatured);
  const [sliderRef] = useKeenSlider({
    mode: "free",
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 16 },
      },
    },
  });

  const { ref, isInView } = useInView(0.2);
  const hasMounted = useHasMounted();

  const fadeInClass =
    hasMounted && isInView
      ? "opacity-100 translate-y-0 animate-fade-in-up"
      : "opacity-0 translate-y-10";

  const sliderClass =
    hasMounted && isInView ? "opacity-100 animate-fade-in-up" : "opacity-0";

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-opacity transform duration-700 ${fadeInClass}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {ProjectsText.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 translate-y-6">
            {ProjectsText.description}
          </p>
        </div>

        <div
          ref={sliderRef}
          className={`keen-slider transition-opacity duration-700 ${sliderClass}`}
        >
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="keen-slider__slide flex items-stretch"
            >
              <FeaturedProjectCard project={project} />
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 ${fadeInClass}`}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 group"
            asChild
          >
            <Link href="/project" className="flex items-center">
              {ProjectsText.viewProjects}
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
