export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Beyond the code, I&apos;m a curious explorer who believes that the
              best solutions come from understanding people and their stories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                My path to development wasn&apos;t traditional. I started as a
                graphic designer, which taught me the importance of user
                experience and visual storytelling. This background gives me a
                unique perspective on creating applications that are not just
                functional, but truly delightful to use.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I made the transition to full-stack development because I wanted
                to bring my designs to life and create complete digital
                experiences. Every project is an opportunity to solve real
                problems and make someone&apos;s day a little bit better.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                When I&apos;m Not Coding
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You&apos;ll find me hiking mountain trails with my camera,
                experimenting with new coffee brewing methods, or getting lost
                in a good sci-fi novel. I&apos;m also passionate about mentoring
                aspiring developers and regularly volunteer at local coding
                bootcamps.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe that diverse experiences make better developers.
                Whether I&apos;m learning a new language (currently tackling
                Japanese!), playing guitar, or cooking elaborate weekend meals,
                I&apos;m always looking for new ways to challenge myself and
                grow.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400 text-center">
              Fun Facts
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🎸</div>
                <p className="text-gray-300">
                  Been playing guitar for 12 years
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">☕</div>
                <p className="text-gray-300">
                  Coffee enthusiast with 15+ brewing methods
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🥾</div>
                <p className="text-gray-300">Hiked in 8 different countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
