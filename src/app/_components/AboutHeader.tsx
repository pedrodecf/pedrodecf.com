import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from './animations/fade-in'

export function AboutHeader() {
  return (
    <section className="flex flex-row justify-between gap-5">
      <div className="w-fit pr-2">
        <FadeIn delay={0.1} duration={0.5}>
          <h2 className="text-4xl font-bold">
            <span className="text-3xl">
              Olá, muito prazer. <br />
            </span>
            Me chamo{' '}
            <span className="text-primary font-extrabold">
              Pedro de Freitas!
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} duration={0.5}>
          <p className="mt-2 text-foreground font-medium opacity-80">
            Nessa sessão você conhecerá um pouco mais da minha jornada, dos meus
            gostos e hobbies. Tech skills você pode encontrar{' '}
            <Link href="/skills" className="text-primary underline">
              aqui.
            </Link>
          </p>
          <p className="mt-2 text-foreground font-medium opacity-80">
            Caso queira ver projetos e portfólio, você irá encontrar{' '}
            <Link href="/portfolio" className="text-primary underline">
              aqui.
            </Link>{' '}
            Minhas redes sociais e e-mail estão na sessão{' '}
            <Link href="/contact" className="text-primary underline">
              contato.
            </Link>
          </p>
          <Separator className="mt-8 w-11/12" />
        </FadeIn>
      </div>

      <FadeIn delay={0.1} duration={0.5}>
        <div className="relative">
          <Image
            src="/others/profile-pic.jpeg"
            alt="Logo"
            width={350}
            height={350}
            priority={true}
            className="rounded-lg border-solid border border-border shadow-custom-light"
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

          <Badge className="select-none rounded-full absolute top-6 -left-3 px-1 py-1 bg-foreground shadow-custom-light hover:bg-foreground animate-float-1">
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
        </div>
      </FadeIn>
    </section>
  )
}
