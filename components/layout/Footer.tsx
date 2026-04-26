import Link from 'next/link'
import Image from 'next/image'

const footerLinks = [
  { label: 'Executive Advisory', href: '/executive-advisory' },
  { label: 'Company Advisory', href: '/company-advisory' },
  { label: 'Strategic Inflection', href: '/strategic-inflection' },
  { label: 'Communications', href: '/communications' },
  { label: 'The Collective', href: '/the-collective' },
  { label: 'About', href: '/about' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Logo */}
          <Link href="/" aria-label="Change Agents — Home" className="flex-shrink-0">
            <Image
              src="/assets/logo/change-agents-logo.png"
              alt="Change Agents"
              width={140}
              height={40}
              className="h-8 w-auto object-contain logo-white"
            />
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-dm-sans font-light text-small text-white opacity-50 hover:opacity-80 transition-opacity duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between gap-3">
          <p className="font-dm-sans font-light text-micro text-white opacity-40">
            &copy; 2025 Change Agents. All rights reserved. India.
          </p>
          <p className="font-dm-sans font-light text-micro text-white opacity-40">
            All engagements are confidential.
          </p>
        </div>
      </div>
    </footer>
  )
}
