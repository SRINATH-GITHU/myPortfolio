"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowRight, Sparkles, Code, Palette } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Dynamic background with mouse tracking */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 40%)`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${
              i % 3 === 0 ? "bg-purple-400/30" : i % 3 === 1 ? "bg-cyan-400/30" : "bg-pink-400/30"
            } rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Header badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm text-gray-300 mb-8 hover:bg-white/15 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>Welcome to my digital space</span>
          <Code className="w-4 h-4 text-cyan-400" />
        </div>

        {/* Name with stunning typography */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight animate-pulse">
            Srinath Patil
          </h1>

          <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-gray-300">
            <div className="flex items-center gap-2">
              <Code className="w-6 h-6 text-purple-400" />
              <span>Full Stack Developer</span>
            </div>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <div className="flex items-center gap-2">
              <Palette className="w-6 h-6 text-cyan-400" />
              <span>UI/UX Enthusiast</span>
            </div>
          </div>
        </div>

        {/* Enhanced bio section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                Passionate about creating beautiful, functional digital experiences that make a difference. I specialize
                in modern web technologies and love turning complex problems into elegant solutions.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                With expertise in React, Node.js, and cloud technologies, I build scalable applications that users love.
                Always learning, always growing, always coding with purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA and Social Links */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 pt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white border-0 px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group hover:scale-105"
          >
            <Sparkles className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            Explore My Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="flex items-center gap-6">
            <Link href="https://linkedin.com/in/srinathpatil" target="_blank" className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <Button
                  variant="outline"
                  size="lg"
                  className="relative border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 text-gray-300 hover:text-white hover:border-purple-400 transition-all duration-300 group-hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </Link>

            <Link href="https://github.com/srinathpatil" target="_blank" className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-cyan-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <Button
                  variant="outline"
                  size="lg"
                  className="relative border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 text-gray-300 hover:text-white hover:border-cyan-400 transition-all duration-300 group-hover:scale-110"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </Link>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-md opacity-50"></div>
            <div className="relative w-8 h-12 border-2 border-gray-400 hover:border-purple-400 rounded-full flex justify-center transition-colors cursor-pointer group">
              <div className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-pulse group-hover:h-5 transition-all"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
