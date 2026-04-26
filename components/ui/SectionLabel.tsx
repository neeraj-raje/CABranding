interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`font-dm-sans font-normal text-micro text-muted uppercase tracking-label ${className}`}
    >
      {children}
    </p>
  )
}
