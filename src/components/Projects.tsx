"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Link from "next/link";
import { Button } from "@/components/ui/imported/button";
import { projectList } from "@/data/projects";
import FeaturedProjectCard from "./ui/ProjectComponents/cards/FeaturedProjectCard";

export default function Projects() {
  const featuredProjects = projectList.filter(
    (project) => project.isFeatured == true
  );
  const [sliderRef] = useKeenSlider({
    mode: "free",
    slides: { perView: 1.2, spacing: 16 }, // small screens: show 1.2 cards
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 16 }, // medium: show 2.2
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 16 }, // Desktop: 2.8 cards
      },
    },
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {featuredProjects.map((project) => (
            <div key={project.id} className="keen-slider__slide">
              <FeaturedProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800"
          >
            <Link href="/project">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
