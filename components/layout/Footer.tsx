import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">

        {/* Logo left, copyright bottom-aligned right */}
        <div className="flex items-end justify-between">
          <Link href="/" aria-label="Change Agents — Home">
            <Image
              src="/assets/logo/change-agents-logo.png"
              alt="Change Agents"
              width={448}
              height={128}
              className="h-16 w-auto object-contain logo-white"
            />
          </Link>

          <p className="font-dm-sans font-light text-micro text-white opacity-40">
            &copy; 2025 Change Agents. All rights reserved. India.
          </p>
        </div>

      </div>
    </footer>
  )
}
