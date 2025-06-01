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
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto" />
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
