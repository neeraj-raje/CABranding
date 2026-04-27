'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import CTAButton from '@/components/ui/CTAButton'

export default function DarkCTAFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="bg-gradient-to-br from-slate-900 via-aurora-blue-900 to-slate-900 px-6 lg:px-8 py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle aurora glow background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-aurora-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-aurora-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side */}
          <div>
            <h2 className="font-cormorant font-light text-5xl lg:text-6xl text-white leading-tight">
              Let&apos;s discuss your strategy.
            </h2>

            <p className="font-dm-sans font-light text-lg text-white/70 mt-8 leading-relaxed">
              We work with a select number of enterprise leaders each year. Engagement begins with a confidential exploratory conversation about your strategic positioning and competitive architecture.
            </p>

            <div className="mt-8">
              <CTAButton href="/contact" variant="aurora-dark">
                Schedule a Call →
              </CTAButton>
            </div>
          </div>

          {/* Right side — Contact form */}
          <div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
              <h3 className="font-dm-sans font-semibold text-2xl text-white mb-8">
                Quick Inquiry
              </h3>

              {submitted ? (
                <div className="bg-aurora-blue-500/20 border border-aurora-blue-400/40 rounded-lg p-6 text-center">
                  <p className="font-dm-sans text-body text-white">
                    Thank you. We&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-dm-sans text-body text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-aurora-blue-400/30 transition-all backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-dm-sans text-body text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-aurora-blue-400/30 transition-all backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your inquiry"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-dm-sans text-body text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-aurora-blue-400/30 transition-all resize-none backdrop-blur-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full border border-white/40 text-white font-dm-sans font-semibold text-small px-6 py-3 rounded-lg hover:border-white/60 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
