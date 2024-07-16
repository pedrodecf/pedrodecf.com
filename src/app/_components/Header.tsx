import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from './animations/fade-in'

export function Header() {
  return (
    <section className="flex gap-6">
      <FadeIn delay={0.1} duration={0.4}>
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
          <FadeIn delay={0.1} duration={0.4}>
            <h1 className="font-extrabold text-3xl">Pedro de Freitas</h1>
          </FadeIn>
          <FadeIn delay={0.1} duration={0.4}>
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
        <FadeIn delay={0.1} duration={0.4}>
          <p className="text-foreground font-medium opacity-60">
            Desenvolvedor Full Stack
          </p>
        </FadeIn>
        <FadeIn delay={0.2} duration={0.4}>
          <div className="flex gap-3 mt-2">
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
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
