export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-mono">{"<About />"}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white font-mono">console.log("Hello World! 👋")</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Software Engineer pursuing B.Tech in Computer Science Engineering with an 8.71 CGPA from
              Malla Reddy University. I worked as a Backend Developer Intern at MHCognition, Chennai from February to
              May 2025.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in building scalable web applications using Django, React, and AI/ML technologies. As an
              aspiring entrepreneur, I'm always looking for opportunities to create innovative solutions that solve
              real-world problems and make a positive impact. I've solved over 250+ coding problems and love
              contributing to projects that drive change.
            </p>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-gray-300">
                <span className="text-blue-400 font-semibold">location:</span>{" "}
                <span className="text-yellow-400">"Hyderabad, India"</span>
              </p>
              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">email:</span>{" "}
                <span className="text-yellow-400">"dhumnorsrinath06052002@gmail.com"</span>
              </p>
              <p className="text-gray-300">
                <span className="text-green-400 font-semibold">phone:</span>{" "}
                <span className="text-yellow-400">"+91 9515747645"</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h4 className="text-xl font-semibold text-white mb-6 font-mono">// Achievements & Stats</h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">education.btech_cse</span>
                <span className="text-blue-400 font-semibold">8.71 CGPA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">education.intermediate</span>
                <span className="text-purple-400 font-semibold">89%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">education.secondary</span>
                <span className="text-green-400 font-semibold">10 CGPA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">coding_problems_solved</span>
                <span className="text-cyan-400 font-semibold">250+</span>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">🏆 INTELLITHON 2K24 - National AI Project Expo</p>
                <p className="text-sm text-gray-400">🏆 AI/ML Department Representative - NAV-NIRMAN</p>
                <p className="text-sm text-gray-400">💼 Backend Developer Intern - MHCognition</p>
                <p className="text-sm text-gray-400">💡 Exploring entrepreneurial opportunities in AI/Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
