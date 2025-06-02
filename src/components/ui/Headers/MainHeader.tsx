"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../imported/button";
import { MainHeaderText } from "@/data/strings";

export default function MainHeader() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="font-bold text-white">AJ</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                {MainHeaderText.title}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {MainHeaderText.sections.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group relative px-4 py-2 text-sm font-medium transition-colors"
                >
                  <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              {/* <Button
                size="sm"
                variant="outline"
                className="ml-4 border-blue-500 text-blue-400 hover:bg-blue-500/10"
              >
                Resume
              </Button> */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="h-0.5 bg-gray-800">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            style={{ width: `${scrollWidth}%` }}
          ></div>
        </div>
      </nav>
    </div>
  );
}
