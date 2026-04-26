'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface TwoColumnStatementProps {
  heading: string
  children: React.ReactNode
  className?: string
}

export default function TwoColumnStatement({
  heading,
  children,
  className = '',
}: TwoColumnStatementProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 ${className}`}
    >
      <div className="lg:col-span-4">
        <h2 className="font-cormorant font-light text-heading text-ink">{heading}</h2>
      </div>
      <div className="lg:col-span-8">{children}</div>
    </motion.div>
  )
}
