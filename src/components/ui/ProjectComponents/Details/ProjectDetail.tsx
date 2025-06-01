import { ExternalLink, Github, Calendar, Users, Code, Zap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/imported/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/imported/card";
import { Badge } from "@/components/ui/imported/badge";
import { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const longDescription =
    "This comprehensive fitness tracking application was built to provide seamless integration with Apple's HealthKit ecosystem. The project features real-time workout monitoring, personalized fitness goals, and detailed analytics. Built with SwiftUI for a modern, responsive interface, the app leverages Core Data for efficient local storage and CloudKit for cross-device synchronization. The development process involved extensive research into health data privacy requirements and implementing complex data visualization components.";

  const features = [
    "Real-time workout tracking with HealthKit integration",
    "Custom SwiftUI components for data visualization",
    "Core Data persistence with CloudKit sync",
    "Apple Watch companion app with WatchKit",
    "Comprehensive unit and UI test coverage",
    "Accessibility support with VoiceOver",
    "Dark mode and dynamic type support",
    "Privacy-first approach to health data",
  ];

  const challenges = [
    "Implementing complex HealthKit data synchronization",
    "Creating responsive charts for workout analytics",
    "Ensuring HIPAA compliance for health data",
    "Optimizing Core Data performance for large datasets",
  ];

  const solutions = [
    "Built custom HealthKit wrapper with proper error handling",
    "Developed reusable SwiftUI chart components with animations",
    "Implemented end-to-end encryption for sensitive data",
    "Used NSFetchedResultsController with batch processing",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {longDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-300 leading-relaxed">
                      • {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="text-gray-300 leading-relaxed">
                      • {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                Screenshots
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* {projectData.gallery.map((image, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden group">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${projectData.title} screenshot ${index + 1}`}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                    </div>
                  ))} */}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">
                  Project Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-white">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Team Size</p>
                    <p className="text-white">{project.teamSize}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Status</p>
                    <p className="text-white">{project.status}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-blue-500 text-blue-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Project Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Link
                    href="https://github.com/example/fittracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-gray-600 text-white hover:bg-gray-700"
                >
                  <Link
                    href="https://fittracker-demo.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.status === "In Development"
                      ? "View Progress"
                      : "Live Demo"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
