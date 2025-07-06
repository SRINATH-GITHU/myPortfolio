import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono">
              {"<Srinath />"}
            </h3>
            <p className="text-gray-300 font-mono text-sm">// Full Stack Developer & Entrepreneur</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white font-mono">// Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="#home"
                className="block text-gray-300 hover:text-blue-400 transition-colors font-mono text-sm"
              >
                home
              </Link>
              <Link
                href="#about"
                className="block text-gray-300 hover:text-blue-400 transition-colors font-mono text-sm"
              >
                about
              </Link>
              <Link
                href="#projects"
                className="block text-gray-300 hover:text-blue-400 transition-colors font-mono text-sm"
              >
                projects
              </Link>
              <Link
                href="#contact"
                className="block text-gray-300 hover:text-blue-400 transition-colors font-mono text-sm"
              >
                contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white font-mono">// Connect</h4>
            <div className="flex gap-4">
              <Link href="https://github.com/dhumnorsrinath" target="_blank" className="group">
                <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </Link>
              <Link href="https://linkedin.com/in/dhumnorsrinath" target="_blank" className="group">
                <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-110">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
              </Link>
              <Link href="mailto:dhumnorsrinath06052002@gmail.com" className="group">
                <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green-500/20 transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 font-mono text-sm">
            Made with <Heart className="w-4 h-4 text-red-400" /> by Srinath Patil © 2024
          </p>
        </div>
      </div>
    </footer>
  )
}
