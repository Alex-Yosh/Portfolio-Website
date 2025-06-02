"use client";

import { Button } from "@/components/ui/imported/button";
import { Mail } from "lucide-react";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref, isInView } = useInView(0.3);
  const hasMounted = useHasMounted();

  const animationClass =
    hasMounted && isInView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10";

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div
        className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ${animationClass}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Let&apos;s Work Together
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto translate-y-6">
          I&apos;m always interested in new opportunities and exciting projects.
          Let&apos;s discuss how we can bring your ideas to life.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-700`}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-800 hover:scale-105"
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
