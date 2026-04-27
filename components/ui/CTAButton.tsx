import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'outline' | 'outline-inverted' | 'aurora' | 'aurora-dark'
  className?: string
}

export default function CTAButton({
  href,
  children,
  variant = 'outline',
  className = '',
}: CTAButtonProps) {
  const base =
    'inline-block font-dm-sans font-semibold text-small px-6 py-3 border rounded transition-all duration-200'

  const styles = {
    'outline-inverted':
      'border-white/60 text-white hover:bg-white hover:text-slate-950',
    'outline': 'border-aurora-blue-500 text-aurora-blue-600 hover:bg-aurora-blue-50 hover:text-aurora-blue-700',
    'aurora': 'border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20',
    'aurora-dark':
      'border-white/60 text-white bg-white/5 hover:bg-white/15 hover:border-white',
  }

  const selectedStyle = styles[variant as keyof typeof styles] || styles.outline

  return (
    <Link href={href} className={`${base} ${selectedStyle} ${className}`}>
      {children}
    </Link>
  )
}
