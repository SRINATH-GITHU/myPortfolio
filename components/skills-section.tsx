"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

const skills = [
  { name: "Python", level: 90, color: "from-blue-400 to-blue-600" },
  { name: "Java", level: 85, color: "from-purple-400 to-purple-600" },
  { name: "JavaScript", level: 88, color: "from-green-400 to-green-600" },
  { name: "Django", level: 92, color: "from-cyan-400 to-cyan-600" },
  { name: "React", level: 85, color: "from-indigo-400 to-indigo-600" },
  { name: "Node.js", level: 80, color: "from-teal-400 to-teal-600" },
  { name: "MySQL", level: 82, color: "from-sky-400 to-sky-600" },
  { name: "AI/ML", level: 78, color: "from-violet-400 to-violet-600" },
]

const frameworks = [
  "Django REST Framework",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "Bootstrap",
  "TailwindCSS",
  "Material UI",
]

const databases = ["MongoDB", "MySQL", "PostgreSQL"]

const tools = ["Git", "GitHub", "Postman", "Streamlit", "OpenAI", "LangChain"]

const entrepreneurialSkills = [
  "Business Strategy",
  "Market Research",
  "Product Development",
  "Team Leadership",
  "Innovation Management",
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(sectionRef.current!)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="min-h-screen py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-mono">{"<Skills />"}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            // Proficient in modern technologies with hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6 font-mono">// Programming Languages</h3>
            {skills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} color={skill.color} isVisible={isVisible} />
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-xl font-semibold text-blue-400 mb-4 font-mono">// Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-mono">
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-xl font-semibold text-purple-400 mb-4 font-mono">// Databases & Tools</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 mb-2 font-mono">databases:</p>
                  <div className="flex flex-wrap gap-2">
                    {databases.map((db, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-mono"
                      >
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 mb-2 font-mono">tools:</p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-xl font-semibold text-green-400 mb-4 font-mono">// Entrepreneurial Skills</h4>
              <div className="flex flex-wrap gap-2">
                {entrepreneurialSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4 font-mono">// Experience</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="text-white font-semibold font-mono">Backend Developer Intern</h5>
                  <p className="text-gray-300 text-sm font-mono">MHCognition • Feb 2025 - May 2025</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Worked on Learning Management System development with Django, MySQL, and REST APIs. Gained hands-on
                    experience in backend development and API design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillBarProps {
  name: string
  level: number
  color: string
  isVisible: boolean
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const start = 0
      const end = level
      const duration = 1000
      const startTime = performance.now()

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        setAnimatedLevel(Math.round(start + progress * (end - start)))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    } else {
      setAnimatedLevel(0)
    }
  }, [isVisible, level])

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-300 font-medium font-mono">{name}</span>
        <span className="text-gray-400 font-mono">{animatedLevel}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
        <div
          className={`bg-gradient-to-r ${color} h-3 rounded-full transition-all duration-300 ease-out relative`}
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
