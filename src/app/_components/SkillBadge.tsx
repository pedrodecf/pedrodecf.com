import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface SkillBadgeProps {
  src: string
  name: string
}

export function SkillBadge(props: SkillBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className="max-w-[200px] min-w-[200px] flex items-center relative p-2 shadow-custom-light group"
    >
      <div className="relative w-9 h-9 rounded-lg overflow-hidden">
        <Image
          src={props.src}
          alt={props.name}
          width={36}
          height={36}
          className="w-9 h-9 blur-md"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out group-hover:scale-125">
          <Image
            src={props.src}
            alt={props.name}
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
      </div>
      <p className="ml-3 font-bold text-sm">{props.name}</p>
    </Badge>
  )
}
