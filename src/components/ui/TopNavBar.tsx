import Link from "next/link";

export default function TopNavBar() {
  return (
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
  );
}
