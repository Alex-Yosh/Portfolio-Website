import Image from "next/image";

const sections = [
  {
    title: "My Journey",
    description:
      "I started as a graphic designer, which taught me how to think in color, space, and flow. That creativity naturally evolved into frontend development where I build not just what works — but what feels good to use.",
    image: "/images/about-journey.jpg",
  },
  {
    title: "Why I Code",
    description:
      "I became a full-stack developer to take ideas from sketchbook to shipped product. I love turning user needs into elegant code — and helping people along the way.",
    image: "/images/about-code.jpg",
  },
  {
    title: "Outside the Screen",
    description:
      "You’ll find me hiking in nature, brewing the perfect cup of coffee, or digging into a sci-fi novel. I believe that creativity and curiosity outside of work make us better developers.",
    image: "/images/about-life.jpg",
  },
];

export default function About() {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 overflow-hidden animate-on-scroll"
      id="about"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-800/50 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="space-y-24">
          <div className="text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Beyond the code, I&apos;m a curious explorer who believes that the
              best solutions come from understanding people and their stories.
            </p>
          </div>

          {sections.map((section, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
