import Link from "next/link";

import Hero from "@/components/Hero";
import Overview from "@/components/overview";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/ui/footer";
import TopNavBar from "@/components/ui/TopNavBar";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <TopNavBar />

      {/* Hero Section */}
      <Hero />

      {/* Overview Section */}
      <Overview />

      {/* Projects Section */}
      <Projects />

      {/* About Me Section - Personal */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
