"use client";

import {
  ArrowLeft,
  Search,
  Filter,
  Star,
  Download,
  Calendar,
  Users,
  Gamepad2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Project data structure
interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  platform: "iOS" | "Android" | "Desktop";
  type: "app" | "game";
  status: "featured" | "recent" | "popular";
  screenshot: string;
  icon: string;
  rating: number;
  reviews: number;
  downloads: string;
  players?: string;
  releaseDate: string;
  technologies: string[];
}

export default function ProjectShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Sample app data
  const projects: Project[] = [
    {
      id: "fittracker-pro",
      name: "FitTracker Pro",
      description: "Comprehensive fitness tracking with HealthKit integration",
      category: "Health & Fitness",
      platform: "iOS",
      type: "app",
      status: "featured",
      screenshot: "/placeholder.svg?height=600&width=300",
      icon: "/placeholder.svg?height=120&width=120",
      rating: 4.8,
      reviews: 2100,
      downloads: "200K+",
      releaseDate: "2022-05-15",
      technologies: ["SwiftUI", "HealthKit", "Core Data"],
    },
    {
      id: "cosmic-runner",
      name: "Cosmic Runner",
      description: "Endless runner game with stunning 3D graphics",
      category: "Games",
      platform: "Android",
      type: "game",
      status: "popular",
      screenshot: "/placeholder.svg?height=600&width=300",
      icon: "/placeholder.svg?height=120&width=120",
      rating: 4.6,
      reviews: 15200,
      downloads: "1.2M+",
      players: "1.2M",
      releaseDate: "2023-01-10",
      technologies: ["Unity", "C#", "AdMob"],
    },
    {
      id: "smart-budget",
      name: "Smart Budget",
      description: "AI-powered budgeting with expense tracking",
      category: "Finance",
      platform: "Android",
      type: "app",
      status: "recent",
      screenshot: "/placeholder.svg?height=600&width=300",
      icon: "/placeholder.svg?height=120&width=120",
      rating: 4.5,
      reviews: 6700,
      downloads: "180K+",
      releaseDate: "2023-06-30",
      technologies: ["Kotlin", "Compose", "Room"],
    },
    {
      id: "puzzle-quest",
      name: "Puzzle Quest",
      description: "Mind-bending puzzle game with 500+ levels",
      category: "Games",
      platform: "iOS",
      type: "game",
      status: "featured",
      screenshot: "/placeholder.svg?height=600&width=300",
      icon: "/placeholder.svg?height=120&width=120",
      rating: 4.9,
      reviews: 12500,
      downloads: "800K+",
      players: "800K",
      releaseDate: "2022-03-12",
      technologies: ["SpriteKit", "GameCenter", "Swift"],
    },
    {
      id: "recipe-master",
      name: "Recipe Master",
      description: "AI-powered recipe suggestions and meal planning",
      category: "Food & Drink",
      platform: "iOS",
      type: "app",
      status: "recent",
      screenshot: "/placeholder.svg?height=600&width=300",
      icon: "/placeholder.svg?height=120&width=120",
      rating: 4.7,
      reviews: 1200,
      downloads: "75K+",
      releaseDate: "2023-08-18",
      technologies: ["Swift", "CoreML", "Firebase"],
    },
    {
      id: "space-defender",
      name: "Space Defender",
      description: "Classic arcade shooter with modern graphics",
      category: "Games",
      platform: "Android",
      type: "game",
      status: "recent",
      screenshot: "/placeholder.svg?height=600&width=300",
      icon: "/placeholder.svg?height=120&width=120",
      rating: 4.3,
      reviews: 8500,
      downloads: "450K+",
      players: "450K",
      releaseDate: "2023-04-25",
      technologies: ["Unity", "C#", "Google Play Games"],
    },
    {
      id: "mindful-moments",
      name: "MindfulMoments",
      description: "Meditation and mindfulness with guided sessions",
      category: "Health & Fitness",
      platform: "iOS",
      type: "app",
      status: "popular",
      screenshot: "/placeholder.svg?height=600&width=300",
      icon: "/placeholder.svg?height=120&width=120",
      rating: 4.9,
      reviews: 5300,
      downloads: "350K+",
      releaseDate: "2023-01-10",
      technologies: ["Swift", "WatchKit", "AVFoundation"],
    },
    {
      id: "photo-editor-pro",
      name: "Photo Editor Pro",
      description: "Professional photo editing with AI enhancements",
      category: "Photo & Video",
      platform: "Android",
      type: "app",
      status: "featured",
      screenshot: "/placeholder.svg?height=600&width=300",
      icon: "/placeholder.svg?height=120&width=120",
      rating: 4.8,
      reviews: 4200,
      downloads: "280K+",
      releaseDate: "2022-11-05",
      technologies: ["Kotlin", "CameraX", "TensorFlow"],
    },
    {
      id: "cyber-legends",
      name: "Cyber Legends",
      description: "Cyberpunk RPG with stunning visuals and deep storyline",
      category: "Games",
      platform: "Desktop",
      type: "game",
      status: "featured",
      screenshot: "/placeholder.svg?height=600&width=800",
      icon: "/placeholder.svg?height=120&width=120",
      rating: 4.8,
      reviews: 3200,
      downloads: "150K+",
      players: "150K",
      releaseDate: "2023-03-15",
      technologies: ["Unreal Engine", "C++", "Steam SDK"],
    },
    {
      id: "quantum-strategy",
      name: "Quantum Strategy",
      description: "Turn-based strategy with quantum mechanics",
      category: "Games",
      platform: "Desktop",
      type: "game",
      status: "popular",
      screenshot: "/placeholder.svg?height=600&width=800",
      icon: "/placeholder.svg?height=120&width=120",
      rating: 4.6,
      reviews: 1800,
      downloads: "85K+",
      players: "85K",
      releaseDate: "2022-11-20",
      technologies: ["Unity", "C#", "Photon"],
    },
    {
      id: "neural-network-sim",
      name: "Neural Network Simulator",
      description: "Educational tool for visualizing neural networks",
      category: "Education",
      platform: "Desktop",
      type: "app",
      status: "recent",
      screenshot: "/placeholder.svg?height=600&width=800",
      icon: "/placeholder.svg?height=120&width=120",
      rating: 4.7,
      reviews: 950,
      downloads: "45K+",
      releaseDate: "2023-07-10",
      technologies: ["Electron", "JavaScript", "TensorFlow.js"],
    },
  ];

  // Get unique values for filters
  const platforms = Array.from(new Set(projects.map((app) => app.platform)));
  const types = Array.from(new Set(projects.map((app) => app.type)));

  // Filter apps based on search and filters
  const filteredApps = projects.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = selectedPlatform
      ? app.platform === selectedPlatform
      : true;
    const matchesType = selectedType ? app.type === selectedType : true;
    return matchesSearch && matchesPlatform && matchesType;
  });

  // Group apps by status
  const featuredApps = filteredApps.filter((app) => app.status === "featured");

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-4 h-4 text-yellow-400" />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400" />
        ))}
      </div>
    );
  };

  // Function to get platform badge color
  const getPlatformBadgeColor = (platform: string) => {
    switch (platform) {
      case "iOS":
        return "bg-gray-600";
      case "Android":
        return "bg-green-600";
      case "Desktop":
        return "bg-gradient-to-r from-purple-500 to-blue-500";
      default:
        return "bg-gray-600";
    }
  };

  // Function to render device mockup
  const renderDeviceMockup = (app: Project) => {
    if (app.platform === "iOS") {
      // iPhone mockup
      return (
        <div className="relative w-[280px] mx-auto md:mx-0">
          <div className="relative w-[280px] h-[570px] rounded-[36px] border-[10px] border-gray-800 overflow-hidden shadow-lg bg-black">
            <div className="absolute top-0 w-full h-6 bg-black z-10 flex justify-center">
              <div className="w-20 h-5 bg-black rounded-b-xl"></div>
            </div>
            <Image
              src={app.screenshot || "/placeholder.svg"}
              alt={app.name}
              width={260}
              height={550}
              className="object-cover"
            />
            <div className="absolute bottom-2 left-0 right-0 mx-auto w-1/3 h-1 bg-gray-700 rounded-full"></div>
          </div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full w-32 h-32 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
        </div>
      );
    } else if (app.platform === "Android") {
      // Android mockup
      return (
        <div className="relative w-[280px] mx-auto md:mx-0">
          <div className="relative w-[280px] h-[570px] rounded-[24px] border-[8px] border-gray-800 overflow-hidden shadow-lg bg-black">
            <Image
              src={app.screenshot || "/placeholder.svg"}
              alt={app.name}
              width={264}
              height={554}
              className="object-cover"
            />
            {/* Android navigation bar */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/80 flex items-center justify-center space-x-8">
              <div className="w-4 h-4 border-2 border-gray-500 rounded-sm"></div>
              <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
              <div className="w-4 h-4 border-2 border-gray-500"></div>
            </div>
          </div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full w-32 h-32 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
        </div>
      );
    } else {
      // Desktop mockup (laptop)
      return (
        <div className="flex justify-center">
          <Image
            src={app.screenshot || "/placeholder.svg"}
            alt={app.name}
            width={264}
            height={554}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      {/* Header with navigation */}
      <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mr-8"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Portfolio
              </Link>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                My Projects
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search apps & games..."
                  className="pl-10 bg-gray-800 border-gray-700 text-white w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-blue-400" />
            <h2 className="text-xl font-semibold">Filters</h2>
          </div>

          {/* Platform Filter */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Platform</p>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedPlatform === null ? "default" : "outline"}
                className={`cursor-pointer ${
                  selectedPlatform === null
                    ? "bg-blue-600"
                    : "bg-transparent border-gray-600 hover:bg-gray-800"
                }`}
                onClick={() => setSelectedPlatform(null)}
              >
                All Platforms
              </Badge>
              {platforms.map((platform) => (
                <Badge
                  key={platform}
                  variant={
                    selectedPlatform === platform ? "default" : "outline"
                  }
                  className={`cursor-pointer ${
                    selectedPlatform === platform
                      ? getPlatformBadgeColor(platform)
                      : "bg-transparent border-gray-600 hover:bg-gray-800"
                  }`}
                  onClick={() => setSelectedPlatform(platform)}
                >
                  {platform}
                </Badge>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Type</p>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedType === null ? "default" : "outline"}
                className={`cursor-pointer ${
                  selectedType === null
                    ? "bg-blue-600"
                    : "bg-transparent border-gray-600 hover:bg-gray-800"
                }`}
                onClick={() => setSelectedType(null)}
              >
                All Types
              </Badge>
              {types.map((type) => (
                <Badge
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedType === type
                      ? type === "game"
                        ? "bg-purple-600"
                        : "bg-blue-600"
                      : "bg-transparent border-gray-600 hover:bg-gray-800"
                  }`}
                  onClick={() => setSelectedType(type)}
                >
                  {type === "game" ? (
                    <>
                      <Gamepad2 className="w-3 h-3 mr-1" />
                      Games
                    </>
                  ) : (
                    "Apps"
                  )}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* App showcase*/}
        {filteredApps.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Featured section */}
            {featuredApps.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Featured Projects
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {featuredApps.map((app) => (
                    <div key={app.id} className="group">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Device mockup */}
                        {renderDeviceMockup(app)}

                        {/* App details */}
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="flex items-start mb-4">
                            <div className="relative mr-4">
                              <Image
                                src={app.icon || "/placeholder.svg"}
                                alt={`${app.name} icon`}
                                width={80}
                                height={80}
                                className="rounded-xl shadow-lg"
                              />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold mb-1">
                                {app.name}
                              </h3>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge
                                  className={getPlatformBadgeColor(
                                    app.platform
                                  )}
                                >
                                  {app.platform}
                                </Badge>
                                {app.type === "game" && (
                                  <Badge className="bg-purple-600">
                                    <Gamepad2 className="w-3 h-3 mr-1" />
                                    Game
                                  </Badge>
                                )}
                              </div>
                              <p className="text-gray-400 mb-2">
                                {app.category}
                              </p>
                              <div className="flex items-center space-x-2">
                                {renderStars(app.rating)}
                                <span className="text-gray-400 text-sm">
                                  ({app.reviews.toLocaleString()})
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-300 mb-6">
                            {app.description}
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center">
                              <Download className="w-5 h-5 text-blue-400 mr-2" />
                              <div>
                                <p className="text-sm text-gray-400">
                                  Downloads
                                </p>
                                <p className="font-semibold">{app.downloads}</p>
                              </div>
                            </div>
                            {app.players && (
                              <div className="flex items-center">
                                <Users className="w-5 h-5 text-blue-400 mr-2" />
                                <div>
                                  <p className="text-sm text-gray-400">
                                    Players
                                  </p>
                                  <p className="font-semibold">{app.players}</p>
                                </div>
                              </div>
                            )}
                            <div className="flex items-center">
                              <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                              <div>
                                <p className="text-sm text-gray-400">
                                  Released
                                </p>
                                <p className="font-semibold">
                                  {new Date(app.releaseDate).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "short",
                                    }
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mb-6">
                            <p className="text-sm text-gray-400 mb-2">
                              Technologies
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {app.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="border-blue-500 text-blue-400"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex space-x-4">
                            <Button
                              asChild
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              <Link href={`/project/${app.id}`}>
                                View Details
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="border-gray-600 text-white hover:bg-gray-800"
                            >
                              {app.platform === "iOS"
                                ? "App Store"
                                : "Play Store"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
