"use client"

import Navbar from "../components/navbar"
import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import ProjectsSection from "../components/projects-section"
import SkillsSection from "../components/skills-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"
import { Bot, Cpu, Zap, Code } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background with Developer Theme */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 -z-10">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Code floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float ${
                i % 4 === 0
                  ? "text-blue-400/30"
                  : i % 4 === 1
                    ? "text-purple-400/30"
                    : i % 4 === 2
                      ? "text-green-400/30"
                      : "text-cyan-400/30"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {i % 5 === 0 && <Code className="w-5 h-5" />}
              {i % 5 === 1 && <Cpu className="w-4 h-4" />}
              {i % 5 === 2 && <Zap className="w-3 h-3" />}
              {i % 5 === 3 && <Bot className="w-4 h-4" />}
              {i % 5 === 4 && (
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full" />
              )}
            </div>
          ))}
        </div>

        {/* Code pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={i}>
                <line
                  x1={Math.random() * 1000}
                  y1={Math.random() * 1000}
                  x2={Math.random() * 1000}
                  y2={Math.random() * 1000}
                  stroke="url(#codeGrad)"
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <circle
                  cx={Math.random() * 1000}
                  cy={Math.random() * 1000}
                  r="2"
                  fill="url(#codeGrad)"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          33% { transform: translateY(-15px) rotate(120deg); opacity: 0.6; }
          66% { transform: translateY(-8px) rotate(240deg); opacity: 0.4; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
