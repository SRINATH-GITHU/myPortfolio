import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Bot } from "lucide-react"

const projects = [
  {
    title: "News Research Tool",
    description:
      "Developed a generative AI platform to retrieve and summarize information from articles across multiple websites, enhancing context accessibility and relevance using LangChain and OpenAI.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&auto=format",
    tech: ["GenAI", "LangChain", "OpenAI", "LLM", "FAISS", "Streamlit"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    isAI: true,
  },
  {
    title: "DevConnect",
    description:
      "A full-stack social media platform built using Django (REST API) and React+Vite with MySQL as database and JWT authentication. Features posting, following, liking, and commenting with responsive UI.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format",
    tech: ["Django", "React", "Python", "MySQL", "JWT", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Agent Assistant",
    description:
      "An intelligent AI agent built with advanced natural language processing capabilities, featuring context-aware responses and multi-modal interactions for enhanced user experience.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format",
    tech: ["Python", "OpenAI", "LangChain", "FastAPI", "React", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    isAI: true,
  },
  {
    title: "Library Management System",
    description:
      "A Java-based application implementing OOP concepts for library operations. Users can add, update, search, borrow, and return books, as well as manage borrower information with modular design.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
    tech: ["Java", "OOP", "MySQL", "Swing"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-mono">{"<Projects />"}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            // Recent projects showcasing my development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 group hover:scale-105 backdrop-blur-sm ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>

                    {/* Project type badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.featured && (
                        <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-xs font-bold font-mono">
                          Featured
                        </div>
                      )}
                      {project.isAI && (
                        <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full text-white text-xs font-bold flex items-center gap-1 font-mono">
                          <Bot className="w-3 h-3" />
                          AI
                        </div>
                      )}
                    </div>

                    {/* Project title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">{project.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium font-mono ${
                          project.isAI ? "bg-purple-500/20 text-purple-300" : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 font-mono"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-600 text-gray-300 hover:text-white hover:border-green-400 bg-transparent font-mono"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
