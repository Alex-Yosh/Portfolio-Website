import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/imported/button";

export default function Hero() {
  return (
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
  );
}
