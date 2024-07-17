import Image from 'next/image'
import { Badge } from '../../components/ui/badge'

interface SkillBadgeProps {
  src: string
  name: string
}

export function SkillBadge({ src, name }: SkillBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className="w-full flex items-center relative p-2 shadow-custom-light group select-none"
    >
      <div className="relative w-9 h-9 rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={name}
          width={36}
          height={36}
          className="blur-md w-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:scale-125">
          <Image
            src={src}
            alt={name}
            width={32}
            height={32}
            className="w-auto"
          />
        </div>
      </div>
      <p className="ml-3 font-bold text-sm">{name}</p>
    </Badge>
  )
}
