'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface WorkItem {
  label: string
  text: string
}

interface NatureOfWorkProps {
  items: WorkItem[]
  className?: string
}

export default function NatureOfWork({ items, className = '' }: NatureOfWorkProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`grid grid-cols-1 sm:grid-cols-2 gap-0 ${className}`}
    >
      {items.map((item, i) => (
        <div key={i} className="border-t border-rule pt-8 pb-10 pr-8">
          <p className="font-dm-sans font-normal text-micro text-muted uppercase tracking-label mb-3">
            {item.label}
          </p>
          <p className="font-cormorant font-light text-heading text-ink">{item.text}</p>
        </div>
      ))}
    </motion.div>
  )
}
