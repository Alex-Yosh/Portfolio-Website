import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="#home"
                className="hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#overview"
                className="hover:text-blue-400 transition-colors"
              >
                Overview
              </Link>
              <Link
                href="#projects"
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </Link>

              <Link
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About Me
              </Link>

              <Link
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full mx-auto border-4 border-blue-500"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Alex Johnson
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              I create beautiful, functional, and user-centered digital
              experiences that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                Download Resume
              </Button>
            </div>
            <div className="flex justify-center space-x-6 mt-12">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section
        id="overview"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Overview</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Full Stack Developer & Digital Innovator
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize
                in creating scalable, user-focused applications that drive
                business growth. My expertise spans the entire development
                lifecycle, from initial concept and design to deployment and
                maintenance.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I have successfully delivered 50+ projects for clients ranging
                from startups to enterprise companies, consistently meeting
                deadlines and exceeding expectations. My approach combines
                technical excellence with strategic thinking to create solutions
                that truly make an impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Frontend</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Vue.js</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Backend</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Professional workspace"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
                  A full-stack e-commerce solution built with Next.js, Stripe,
                  and PostgreSQL. Features include user authentication, payment
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
                        <Link href="/project/task-management">
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
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section - Personal */}

      <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Beyond the code, I&apos;m a curious explorer who believes that
                the best solutions come from understanding people and their
                stories.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My path to development wasn&apos;t traditional. I started as a
                  graphic designer, which taught me the importance of user
                  experience and visual storytelling. This background gives me a
                  unique perspective on creating applications that are not just
                  functional, but truly delightful to use.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I made the transition to full-stack development because I
                  wanted to bring my designs to life and create complete digital
                  experiences. Every project is an opportunity to solve real
                  problems and make someone&apos;s day a little bit better.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                  When I&apos;m Not Coding
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You&apos;ll find me hiking mountain trails with my camera,
                  experimenting with new coffee brewing methods, or getting lost
                  in a good sci-fi novel. I&apos;m also passionate about
                  mentoring aspiring developers and regularly volunteer at local
                  coding bootcamps.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe that diverse experiences make better developers.
                  Whether I&apos;m learning a new language (currently tackling
                  Japanese!), playing guitar, or cooking elaborate weekend
                  meals, I&apos;m always looking for new ways to challenge
                  myself and grow.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 text-center">
                Fun Facts
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🎸</div>
                  <p className="text-gray-300">
                    Been playing guitar for 12 years
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">☕</div>
                  <p className="text-gray-300">
                    Coffee enthusiast with 15+ brewing methods
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🥾</div>
                  <p className="text-gray-300">
                    Hiked in 8 different countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Alex Johnson. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
