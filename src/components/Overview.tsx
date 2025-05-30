import Image from "next/image";

export default function Overview() {
  return (
    <section
      id="overview"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Overview</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Full Stack Developer & Digital Innovator
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize
              in creating scalable, user-focused applications that drive
              business growth. My expertise spans the entire development
              lifecycle, from initial concept and design to deployment and
              maintenance.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I have successfully delivered 50+ projects for clients ranging
              from startups to enterprise companies, consistently meeting
              deadlines and exceeding expectations. My approach combines
              technical excellence with strategic thinking to create solutions
              that truly make an impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Frontend</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Vue.js</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Backend</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Professional workspace"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-blue-500/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
