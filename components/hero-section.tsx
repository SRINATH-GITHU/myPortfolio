"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowRight, Code, Bot, Terminal } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="items-center">
          {/* Left side - Text content */}
          <div className="text-center space-y-8">
            {/* Header badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm text-gray-300 mb-8 hover:bg-white/15 transition-all duration-300">
              <Terminal className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>{"<Developer />"}</span>
              <Code className="w-4 h-4 text-purple-400" />
            </div>

            {/* Name with stunning typography */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent leading-tight font-mono">
                Srinath Patil
              </h1>

              <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-gray-300 flex-wrap">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="font-mono">Full Stack Developer</span>
                </div>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-purple-400" />
                  <span className="font-mono">AI/ML Engineer</span>
                </div>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-green-400 rounded-full animate-pulse"></div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-green-400" />
                  <span className="font-mono">Entrepreneur</span>
                </div>
              </div>
            </div>

            {/* Enhanced bio section */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                  <p className="text-lg text-gray-300 leading-relaxed mb-4 font-mono text-sm">
                    <span className="text-green-400">const</span> <span className="text-blue-400">developer</span> ={" "}
                    {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">education</span>:{" "}
                    <span className="text-yellow-400">"B.Tech CSE (8.71 CGPA)"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">experience</span>:{" "}
                    <span className="text-yellow-400">"Backend Developer Intern"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">passion</span>:{" "}
                    <span className="text-yellow-400">"Building innovative solutions"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">problems_solved</span>:{" "}
                    <span className="text-cyan-400">250+</span>
                    <br />
                    {"}"};
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA and Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Button
                onClick={scrollToNext}
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 hover:from-blue-600 hover:via-purple-600 hover:to-green-600 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group hover:scale-105 font-mono"
              >
                <Terminal className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                ./explore_work.sh
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center gap-4">
                <Link href="https://linkedin.com/in/dhumnorsrinath" target="_blank" className="group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <Button
                      variant="outline"
                      size="lg"
                      className="relative border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 text-gray-300 hover:text-white hover:border-blue-400 transition-all duration-300 group-hover:scale-110 font-mono"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </Link>

                <Link href="https://github.com/dhumnorsrinath" target="_blank" className="group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <Button
                      variant="outline"
                      size="lg"
                      className="relative border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 text-gray-300 hover:text-white hover:border-purple-400 transition-all duration-300 group-hover:scale-110 font-mono"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform cursor-pointer group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-50"></div>
            <div className="relative w-8 h-12 border-2 border-gray-400 hover:border-blue-400 rounded-full flex justify-center transition-colors">
              <div className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse group-hover:h-5 transition-all"></div>
            </div>
          </div>
        </button>
      </div>
    </section>
  )
}
