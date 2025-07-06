"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, ExternalLink, Terminal, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await submitContactForm(formData)

      setSubmitStatus({
        type: result.success ? "success" : "error",
        message: result.message,
      })

      // Reset form if successful
      if (result.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-mono">{"<Contact />"}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            // Let's collaborate and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white font-mono">console.log("Let's Connect!");</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm open to new opportunities, freelance projects, startup collaborations, and partnerships in full-stack
              development and AI/ML. Whether you have a business idea or need technical expertise, let's discuss how we
              can create innovative solutions together!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium font-mono">email</p>
                  <p className="text-gray-300 font-mono text-sm">dhumnorsrinath06052002@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium font-mono">phone</p>
                  <p className="text-gray-300 font-mono text-sm">+91 9515747645</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium font-mono">location</p>
                  <p className="text-gray-300 font-mono text-sm">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4 font-mono">// Find me on</h4>
              <div className="flex gap-4">
                <Link href="https://leetcode.com/dhumnorsrinath" target="_blank" className="group">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:text-white hover:border-cyan-400 bg-transparent font-mono"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LeetCode
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-xl p-6 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Terminal className="w-6 h-6 text-green-400" />
                <h4 className="text-lg font-semibold text-green-400 font-mono">// Developer & Entrepreneur</h4>
              </div>
              <p className="text-gray-300 text-sm font-mono">
                Always looking for innovative business opportunities and technical challenges. Let's build the future
                together!
              </p>
            </div>
          </div>

          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-300"
                      : "bg-red-500/20 border border-red-500/30 text-red-300"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <p className="font-mono text-sm">{submitStatus.message}</p>
                </div>
              )}

              <form id="contact-form" action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm font-mono"
                      placeholder="your_name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm font-mono"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm font-mono"
                    placeholder="project_collaboration || business_opportunity"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none backdrop-blur-sm font-mono"
                    placeholder="// Tell me about your project or idea..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 text-lg font-semibold font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      sending_message()
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      send_message()
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
