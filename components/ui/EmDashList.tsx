interface EmDashListProps {
  items: string[]
  className?: string
}

export default function EmDashList({ items, className = '' }: EmDashListProps) {
  return (
    <ul className={`space-y-1 ${className}`}>
      {items.map((item, i) => (
        <li
          key={i}
          className="font-dm-sans font-light text-body text-ink leading-loose"
        >
          <span className="mr-2 text-accent-green select-none">&mdash;</span>
          {item}
        </li>
      ))}
    </ul>
  )
}
