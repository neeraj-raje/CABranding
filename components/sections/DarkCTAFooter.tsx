'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

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
    <section className="bg-accent px-6 lg:px-8 py-24 lg:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side */}
          <div>
            <p className="font-dm-sans font-light text-micro text-white/60 uppercase tracking-label mb-4">
              Limited Engagements
            </p>

            <h2 className="font-cormorant font-light text-title text-white">
              We work with a small number of enterprise leaders each year.
            </h2>

            <p className="font-dm-sans font-light text-lead text-white/75 mt-6">
              Engagement begins with a confidential exploratory discussion.
            </p>
          </div>

          {/* Right side — Contact form */}
          <div>
            <h3 className="font-cormorant font-light text-heading text-white mb-6">
              Start a conversation
            </h3>

            {submitted ? (
              <div className="bg-accent-green bg-opacity-20 border border-accent-green rounded p-4">
                <p className="font-dm-sans text-body text-white">
                  We&apos;ll reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 font-dm-sans text-body text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 font-dm-sans text-body text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 font-dm-sans text-body text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent-green text-white font-dm-sans font-normal text-small py-2.5 rounded hover:opacity-90 transition-opacity duration-200"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
