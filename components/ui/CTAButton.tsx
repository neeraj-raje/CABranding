import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'outline' | 'outline-inverted'
  className?: string
}

export default function CTAButton({
  href,
  children,
  variant = 'outline',
  className = '',
}: CTAButtonProps) {
  const base =
    'inline-block font-dm-sans font-normal text-small px-5 py-2.5 border transition-colors duration-200'

  const styles =
    variant === 'outline-inverted'
      ? 'border-white/60 text-white hover:bg-white hover:text-accent'
      : 'border-accent text-accent hover:bg-accent hover:text-white'

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  )
}
