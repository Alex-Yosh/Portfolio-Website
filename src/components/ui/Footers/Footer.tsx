import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Copyright } from "@/data/strings";
import { Links } from "@/data/strings";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 mb-4 md:mb-0">{Copyright}</div>
        <div className="flex space-x-6">
          <Link
            href={Links.GitHub}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={Links.Linkedin}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href={Links.Mail}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
