"use client";

import Image from "next/image";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useInView } from "@/hooks/useInView";
import { AboutText } from "@/data/strings";

export default function About() {
  const hasMounted = useHasMounted();

  const { ref: ref0, isInView: isInView0 } = useInView(0.3);
  const { ref: ref1, isInView: isInView1 } = useInView(0.3);
  const { ref: ref2, isInView: isInView2 } = useInView(0.3);

  const refs = [ref0, ref1, ref2];
  const views = [isInView0, isInView1, isInView2];

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-800/50 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {AboutText.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="space-y-24">
          <div className="text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {AboutText.description}
            </p>
          </div>

          {AboutText.sections.map((section, index) => {
            const ref = refs[index];
            const isInView = views[index];

            const directionClass =
              index % 2 === 0 ? "translate-x-[-40px]" : "translate-x-[40px]";

            const visibleClass =
              hasMounted && isInView
                ? "opacity-100 translate-x-0"
                : `opacity-0 ${directionClass}`;

            return (
              <div
                key={index}
                ref={ref}
                className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out will-change-transform ${visibleClass} ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative w-full h-64 md:h-80 group">
                  {/* Glow layer */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-70 z-0" />

                  {/* Image container */}
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-xl z-10 border border-white/10">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
