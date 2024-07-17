import Image from 'next/image'
import { FadeIn } from './animations/FadeIn'
import { Badge } from '../../components/ui/badge'

export function Header() {
  return (
    <section className="flex gap-6">
      <FadeIn as="div" delay={0.1}>
        <Image
          src="/others/profile-pic.jpeg"
          alt="Logo"
          width={100}
          height={100}
          priority={true}
          className="rounded-lg border-solid border border-border shadow-custom-light"
        />
      </FadeIn>
      <div className="flex flex-col align-middle justify-center">
        <div className="flex items-center">
          <FadeIn as="h1" delay={0.1} className="font-extrabold text-3xl">
            Pedro de Freitas
          </FadeIn>
          <FadeIn as="div" delay={0.1}>
            <Badge
              variant="outline"
              className="ml-2 rounded-full p-1 shadow-custom-light hover:bg-primary"
            >
              <Image
                src="/emojis/memoji1.png"
                alt="memoji"
                width={25}
                height={25}
              />
            </Badge>
          </FadeIn>
        </div>
        <FadeIn as="p" delay={0.1} className="font-medium text-opaque">
          Desenvolvedor Full Stack
        </FadeIn>
        <FadeIn delay={0.2} className="flex gap-3 mt-2">
          <Badge variant="default" className="select-none">
            React
          </Badge>
          <Badge variant="default" className="select-none">
            Node.js
          </Badge>
          <Badge variant="default" className="select-none">
            Next.js
          </Badge>
          <Badge variant="default" className="select-none">
            NestJS
          </Badge>
          <Badge variant="default" className="select-none">
            JavaScript
          </Badge>
          <Badge variant="default" className="select-none">
            TypeScript
          </Badge>
        </FadeIn>
      </div>
    </section>
  )
}
