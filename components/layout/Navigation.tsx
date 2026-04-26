'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Executive Advisory', href: '/executive-advisory' },
  { label: 'Company Advisory', href: '/company-advisory' },
  { label: 'Strategic Inflection', href: '/strategic-inflection' },
  { label: 'Communications', href: '/communications' },
  { label: 'The Collective', href: '/the-collective' },
  { label: 'About', href: '/about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ground/95 backdrop-blur-sm border-b border-rule'
            : 'bg-ground'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Change Agents — Home">
              <Image
                src="/assets/logo/change-agents-logo.png"
                alt="Change Agents"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-dm-sans font-light text-small text-ink opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="font-dm-sans font-normal text-small text-accent border border-accent px-4 py-2 hover:bg-accent hover:text-white transition-colors duration-200"
              >
                Start a Conversation
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-px bg-ink" />
              <span className="block w-6 h-px bg-ink" />
              <span className="block w-4 h-px bg-ink" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-ground flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Change Agents — Home">
                <Image
                  src="/assets/logo/change-agents-logo.png"
                  alt="Change Agents"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-ink text-xl"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col justify-center flex-1 px-8 gap-8" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-dm-sans font-light text-heading text-ink opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="font-dm-sans font-normal text-small text-accent border border-accent px-5 py-3 self-start hover:bg-accent hover:text-white transition-colors duration-200 mt-4"
              >
                Start a Conversation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to push content below fixed nav */}
      <div className="h-16" />
    </>
  )
}
