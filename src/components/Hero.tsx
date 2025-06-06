"use client";

import { HeroText, Name } from "@/data/strings";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Links } from "@/data/strings";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center py-20">
          {/* Profile Image with Glow Effect */}
          <div className="mb-8 relative">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <Image
                src={HeroText.img}
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full relative z-10 border-4 border-white/20 backdrop-blur-sm"
              />
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-spin-slow opacity-60"></div>
            </div>
          </div>

          {/* Animated Name */}
          <div className="mb-6 relative">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
              {Name}
            </h1>
            {/* Glowing underline */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
          </div>

          {/* Animated Subtitle */}
          <div className="mb-8 relative text-center animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 animate-bounce-subtle">
              {HeroText.mainRole}
            </h1>
            <p className="text-sm md:text-base text-gray-300">
              <span className="inline-block animate-bounce-subtle">
                {HeroText.roleOne}
              </span>
              <span className="mx-2 inline-block text-blue-400 animate-bounce-subtle delay-200">
                •
              </span>
              <span className="inline-block animate-bounce-subtle delay-200">
                {HeroText.roleTwo}
              </span>
            </p>
          </div>

          {/* Enhanced Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            {HeroText.description}
          </p>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 animate-fade-in-up delay-700">
            <Link href={Links.GitHub} className="group relative">
              <div className="absolute inset-0 bg-gray-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href={Links.Linkedin} className="group relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110">
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href={Links.Mail} className="group relative">
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center group-hover:border-purple-400 transition-all duration-300 group-hover:scale-110">
                <Mail className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </div>
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
