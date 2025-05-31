import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/imported/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/imported/card";
import { Badge } from "@/components/ui/imported/badge";

interface ProjectDetailProps {
  project?: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    gallery: string[];
    technologies: string[];
    features: string[];
    liveUrl: string;
    githubUrl: string;
    duration: string;
    teamSize: string;
    role: string;
    challenges: string[];
    solutions: string[];
  };
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  // Default project data for demo
  const defaultProject = {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL",
    longDescription:
      "This comprehensive e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The project features a modern, responsive design with advanced functionality including real-time inventory management, secure payment processing, and detailed analytics dashboard.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
      "Prisma",
      "NextAuth",
      "Vercel",
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order management system",
      "Admin dashboard with analytics",
      "Responsive design for all devices",
      "SEO optimization",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/repo",
    duration: "3 months",
    teamSize: "Solo project",
    role: "Full Stack Developer",
    challenges: [
      "Implementing secure payment processing",
      "Optimizing database queries for large product catalogs",
      "Creating a responsive design that works across all devices",
      "Ensuring proper SEO for product pages",
    ],
    solutions: [
      "Integrated Stripe with proper webhook handling for secure transactions",
      "Implemented database indexing and query optimization techniques",
      "Used Tailwind CSS with mobile-first approach for responsive design",
      "Added proper meta tags and structured data for SEO",
    ],
  };

  const projectData = project || defaultProject;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              href="/project"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
            <div className="flex space-x-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                <Link
                  href={projectData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link
                  href={projectData.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {projectData.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl">
              {projectData.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {projectData.technologies.map((tech) => (
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
              src={projectData.image || "/placeholder.svg"}
              alt={projectData.title}
              width={800}
              height={400}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Project Details */}
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
                  {projectData.longDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectData.features.map((feature, index) => (
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
                    {projectData.challenges.map((challenge, index) => (
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
                    {projectData.solutions.map((solution, index) => (
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
                  {projectData.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden group"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${projectData.title} screenshot ${index + 1}`}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                    </div>
                  ))}
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
                      <p className="text-white">{projectData.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Team Size</p>
                      <p className="text-white">{projectData.teamSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Role</p>
                      <p className="text-white">{projectData.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    Technologies Used
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {projectData.technologies.map((tech) => (
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
                      href={projectData.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700"
                  >
                    <Link
                      href={projectData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Alex Johnson. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
