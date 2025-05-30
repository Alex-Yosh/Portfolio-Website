import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let&apos;s Work Together
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and exciting projects.
          Let&apos;s discuss how we can bring your ideas to life.
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
  );
}
