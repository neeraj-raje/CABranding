import Image from 'next/image'

interface TeamPortraitProps {
  src: string
  name: string
  title: string
  size?: number
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(' ')
  const initials = parts.length >= 2
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : parts[0][0]
  return (
    <div className="aspect-square w-full bg-rule flex items-center justify-center">
      <span className="font-cormorant font-light text-title text-muted">
        {initials.toUpperCase()}
      </span>
    </div>
  )
}

export default function TeamPortrait({ src, name, title, size = 320 }: TeamPortraitProps) {
  return (
    <div>
      <div className="aspect-square w-full overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={`${name} — ${title}`}
            width={size}
            height={size}
            className="grayscale-photo w-full h-full object-cover"
          />
        ) : (
          <Initials name={name} />
        )}
      </div>
      <div className="mt-4">
        <p className="font-cormorant font-normal text-heading text-ink">{name}</p>
        <p className="font-dm-sans font-normal text-micro text-muted uppercase tracking-label mt-1">
          {title}
        </p>
      </div>
    </div>
  )
}
