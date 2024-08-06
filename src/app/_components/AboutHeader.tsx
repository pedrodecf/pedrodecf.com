import Image from 'next/image'
import { FadeIn } from './animations/FadeIn'
import { Separator } from '../../components/ui/separator'
import { Badge } from '../../components/ui/badge'

export function AboutHeader() {
  return (
    <section className="flex flex-row justify-between gap-5 bg-background max-[840px]:flex max-[840px]:flex-col">
      <div className="w-fit pr-2 max-[840px]:text-center">
        <FadeIn as="h2" className="text-4xl font-bold">
          <span className="text-3xl">
            Olá, muito prazer.
            <br />
          </span>
          Me chamo{' '}
          <span className="text-primary font-extrabold">Pedro de Freitas!</span>
        </FadeIn>
        <FadeIn as="div">
          <p className="mt-2 font-medium text-opaque">
            Sou um <b>programdor full stack</b>, conto com mais de três anos de
            experiência em desenvolvimento de software.
          </p>
          <p className="mt-2 font-medium text-opaque">
            Nessa sessão você encontrará um breve resumo do início da minha
            carreira como desenvolvedor e um pouco sobre minhas metas.
          </p>
          <Separator className="mt-10 w-11/12 max-[840px]:hidden" />
        </FadeIn>
      </div>

      <FadeIn
        as="div"
        className="relative max-[840px]:w-7/12 max-[840px]:justify-center max-[840px]:mx-auto"
      >
        <Image
          src="/others/profile-3.jpg"
          alt="Logo"
          width={350}
          height={350}
          priority={true}
          className="rounded-full border-solid border border-border shadow-custom-light select-none"
        />

        <Badge className="select-none rounded-full absolute -bottom-5 left-12 px-1 py-1 bg-foreground shadow-custom-light hover:bg-foreground animate-float-2">
          <Image src="/svg/nodejs.svg" alt="Memoji" width={25} height={25} />
        </Badge>

        <Badge className="select-none rounded-full absolute bottom-10 -left-5 px-1 py-1 bg-foreground shadow-custom-light hover:bg-foreground animate-float-3">
          <Image src="/svg/react.svg" alt="Memoji" width={25} height={25} />
        </Badge>

        <Badge className="select-none rounded-full absolute top-12 -right-5 px-1 py-1 bg-foreground shadow-custom-light hover:bg-foreground animate-float-3">
          <Image src="/svg/java.svg" alt="Memoji" width={25} height={25} />
        </Badge>

        <Badge className="select-none rounded-full absolute top-6 -left-1 px-1 py-1 bg-foreground shadow-custom-light hover:bg-foreground animate-float-1">
          <Image src="/svg/golang.svg" alt="Memoji" width={25} height={25} />
        </Badge>

        <Badge className="select-none rounded-full absolute bottom-8 -right-3 bg-foreground px-1 py-1 shadow-custom-light hover:bg-foreground animate-float-2">
          <Image src="/svg/spring.svg" alt="Memoji" width={25} height={25} />
        </Badge>
      </FadeIn>
    </section>
  )
}
