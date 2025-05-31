import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/imported/card";
import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/imported/button";
import Image from "next/image";

export default function Projects() {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors group">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce Platform"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href="/project/ecommerce-platform">
                        View Details
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="#" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-white mb-2">
                E-commerce Platform
              </CardTitle>
              <CardDescription className="text-gray-400 mb-4">
                A full-stack e-commerce solution built with Next.js, Stripe, and
                PostgreSQL. Features include user authentication, payment
                processing, and admin dashboard.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 text-xs rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-green-600 text-xs rounded-full">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-600 text-xs rounded-full">
                  PostgreSQL
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors group">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Task Management App"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href="/project/task-management">View Details</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="#" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-white mb-2">
                Task Management App
              </CardTitle>
              <CardDescription className="text-gray-400 mb-4">
                A collaborative task management application with real-time
                updates, drag-and-drop functionality, and team collaboration
                features.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 text-xs rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-yellow-600 text-xs rounded-full">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-red-600 text-xs rounded-full">
                  Socket.io
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors group">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Weather Dashboard"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href="/project/weather-dashboard">
                        View Details
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="#" target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-white mb-2">
                Weather Dashboard
              </CardTitle>
              <CardDescription className="text-gray-400 mb-4">
                A beautiful weather dashboard with location-based forecasts,
                interactive maps, and detailed weather analytics.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 text-xs rounded-full">
                  Vue.js
                </span>
                <span className="px-3 py-1 bg-green-600 text-xs rounded-full">
                  Express
                </span>
                <span className="px-3 py-1 bg-orange-600 text-xs rounded-full">
                  API
                </span>
              </div>
            </CardContent>
          </Card>
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
