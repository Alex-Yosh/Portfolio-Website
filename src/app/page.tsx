import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/ui/Footers/Footer";
import MainHeader from "@/components/ui/Headers/MainHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <MainHeader />

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
