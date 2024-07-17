import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from './animations/FadeIn'
import { Separator } from '../../components/ui/separator'
import { Badge } from '../../components/ui/badge'

export function AboutHeader() {
  return (
    <section className="flex flex-row justify-between gap-5 bg-background max-[840px]:flex max-[840px]:flex-col">
      <div className="w-fit pr-2 max-[840px]:text-center">
        <FadeIn as="h2" className="text-4xl font-bold">
          <span className="text-3xl">
            Olá, muito prazer. <br />
          </span>
          Me chamo{' '}
          <span className="text-primary font-extrabold">Pedro de Freitas!</span>
        </FadeIn>
        <FadeIn as="div">
          <p className="mt-2 text-foreground font-medium opacity-80">
            Nessa sessão você conhecerá um pouco mais da minha jornada, dos meus
            gostos e hobbies. Tech skills você pode encontrar{' '}
            <Link href="/skills" className="text-primary underline">
              aqui.
            </Link>
          </p>
          <p className="mt-2 text-foreground font-medium opacity-80 max-[840px]:hidden">
            Caso queira ver projetos e portfólio, você irá encontrar{' '}
            <Link href="/portfolio" className="text-primary underline">
              aqui.
            </Link>{' '}
            Minhas redes sociais e e-mail estão na sessão{' '}
            <Link href="/contact" className="text-primary underline">
              contato.
            </Link>
          </p>
          <Separator className="mt-8 w-11/12 max-[840px]:hidden" />
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
          <Image
            src="/emojis/nodejs-ico.png"
            alt="Memoji"
            width={25}
            height={25}
          />
        </Badge>

        <Badge className="select-none rounded-full absolute bottom-10 -left-5 px-1 py-1 bg-foreground shadow-custom-light hover:bg-foreground animate-float-3">
          <Image
            src="/emojis/react-ico.png"
            alt="Memoji"
            width={25}
            height={25}
          />
        </Badge>

        <Badge className="select-none rounded-full absolute top-12 -right-5 px-1 py-1 bg-foreground shadow-custom-light hover:bg-foreground animate-float-3">
          <Image
            src="/emojis/nextjs-ico.webp"
            alt="Memoji"
            width={25}
            height={25}
          />
        </Badge>

        <Badge className="select-none rounded-full absolute top-6 -left-1 px-1 py-1 bg-foreground shadow-custom-light hover:bg-foreground animate-float-1">
          <Image
            src="/emojis/javascript-ico.png"
            alt="Memoji"
            width={25}
            height={25}
          />
        </Badge>

        <Badge className="select-none rounded-full absolute bottom-8 -right-3 bg-foreground px-1 py-1 shadow-custom-light hover:bg-foreground animate-float-2">
          <Image
            src="/emojis/typescript-ico.png"
            alt="Memoji"
            width={25}
            height={25}
          />
        </Badge>
      </FadeIn>
    </section>
  )
}
