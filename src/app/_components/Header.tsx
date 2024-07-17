import Image from 'next/image'
import { FadeIn } from './animations/FadeIn'
import { Badge } from '../../components/ui/badge'

export function Header() {
  return (
    <section className="flex gap-6">
      <FadeIn
        as="div"
        delay={0.1}
        className="max-[840px]:flex max-[840px]:items-center"
      >
        <Image
          src="/others/profile.jpg"
          alt="Logo"
          width={100}
          height={100}
          priority={true}
          className="rounded-lg border-solid border border-border shadow-custom-light"
        />
      </FadeIn>
      <div className="flex flex-col align-middle justify-center">
        <div className="flex items-center">
          <FadeIn
            as="h1"
            delay={0.1}
            className="font-extrabold text-3xl max-[840px]:text-2xl"
          >
            Pedro de Freitas
          </FadeIn>
        </div>
        <FadeIn
          as="p"
          delay={0.1}
          className="font-medium text-opaque max-[840px]:text-sm"
        >
          Desenvolvedor Full Stack
        </FadeIn>
        <FadeIn
          as="div"
          delay={0.2}
          className="flex flex-wrap gap-3 mt-2 max-[840px]:gap-1.5"
        >
          <Badge variant="default" className="select-none">
            React
          </Badge>
          <Badge variant="default" className="select-none">
            Node.js
          </Badge>
          <Badge variant="default" className="select-none max-[840px]:hidden">
            Next.js
          </Badge>
          <Badge variant="default" className="select-none max-[840px]:hidden">
            NestJS
          </Badge>
          <Badge variant="default" className="select-none max-[840px]:hidden">
            JavaScript
          </Badge>
          <Badge variant="default" className="select-none max-[840px]">
            TypeScript
          </Badge>
        </FadeIn>
      </div>
    </section>
  )
}
