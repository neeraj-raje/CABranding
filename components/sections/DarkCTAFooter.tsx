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
            <h2 className="font-dm-sans font-bold text-4xl lg:text-5xl text-white">
              We work with a small number of enterprise leaders each year.
            </h2>

            <p className="font-dm-sans font-normal text-lg text-white/75 mt-6">
              Engagement begins with a confidential exploratory discussion.
            </p>
          </div>

          {/* Right side — Contact form */}
          <div>
            <h3 className="font-dm-sans font-bold text-2xl text-white mb-6">
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
                    className="w-full bg-white/80 border border-white rounded px-4 py-2.5 font-dm-sans text-body text-ink placeholder-ink/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
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
                    className="w-full bg-white/80 border border-white rounded px-4 py-2.5 font-dm-sans text-body text-ink placeholder-ink/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
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
                    className="w-full bg-white/80 border border-white rounded px-4 py-2.5 font-dm-sans text-body text-ink placeholder-ink/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-white/60 text-white font-dm-sans font-normal text-small px-5 py-2.5 rounded hover:bg-white hover:text-accent transition-colors duration-200"
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
