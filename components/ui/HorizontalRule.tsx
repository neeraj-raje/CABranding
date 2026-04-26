interface HorizontalRuleProps {
  className?: string
}

export default function HorizontalRule({ className = '' }: HorizontalRuleProps) {
  return <hr className={`border-t border-rule ${className}`} />
}
