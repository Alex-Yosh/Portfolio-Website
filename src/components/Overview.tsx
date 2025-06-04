"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { useHasMounted } from "@/hooks/useHasMounted";
import { OverviewText } from "@/data/strings";

export default function Overview() {
  const hasMounted = useHasMounted();
  const { ref: titleRef, isInView: titleInView } = useInView(0.3);
  const { ref: leftRef, isInView: leftInView } = useInView(0.3);
  const { ref: rightRef, isInView: rightInView } = useInView(0.3);

  const fadeUp = (visible: boolean) =>
    hasMounted && visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10";

  const fadeLeft = (visible: boolean) =>
    hasMounted && visible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-10";

  const fadeRight = (visible: boolean) =>
    hasMounted && visible
      ? "opacity-100 -translate-x-0"
      : "opacity-0 -translate-x-10";

  return (
    <section
      id="overview"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${fadeUp(
            titleInView
          )}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {OverviewText.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div
            ref={leftRef}
            className={`space-y-6 transition-all duration-700 ease-out ${fadeRight(
              leftInView
            )}`}
          >
            {/* <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              {OverviewText.subTitle}
            </h3> */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              {OverviewText.paragraphOne}
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {OverviewText.paragraphTwo}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {OverviewText.skills.map((section) => (
                <div key={section.title}>
                  <h4
                    className={`font-semibold text-${section.color}-400 mb-2`}
                  >
                    {section.title}
                  </h4>
                  <ul className="text-gray-300 space-y-1">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full bg-${section.color}-500 mr-2`}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            ref={rightRef}
            className={`relative transition-all duration-700 ease-out ${fadeLeft(
              rightInView
            )}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-50 animate-pulse-slow"></div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Mobile development workspace"
              width={400}
              height={400}
              className="rounded-lg relative z-10 border border-white/10 shadow-xl"
            />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
