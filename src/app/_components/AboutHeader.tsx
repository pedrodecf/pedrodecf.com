import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

export function AboutHeader() {
  return (
    <div className="flex flex-row justify-between gap-5">
      <div className="w-fit pr-2">
        <h2 className="text-4xl font-bold">
          <span className="text-3xl">
            Olá, muito prazer. <br />
          </span>
          Me chamo{' '}
          <span className="text-primary font-extrabold">Pedro de Freitas!</span>
        </h2>
        <p className="mt-2 opacity-90">
          Nessa sessão você conhecerá um pouco mais da minha jornada, dos meus
          gostos e hobbies. Tech skills você pode encontrar{' '}
          <Link href="/skills" className="text-primary hover:underline">
            aqui.
          </Link>
        </p>
        <p className="mt-2 opacity-90">
          Caso queira ver projetos e portfólio, você irá encontrar{' '}
          <Link href="/portfolio" className="text-primary hover:underline">
            aqui.
          </Link>{' '}
          Minhas redes sociais e e-mail estão na sessão{' '}
          <Link href="/contact" className="text-primary hover:underline">
            contato.
          </Link>
        </p>
      </div>

      <div className="relative">
        <Image
          src="/profile-pic.jpeg"
          alt="Logo"
          width={350}
          height={350}
          priority={true}
          className="rounded-lg border-solid border border-border shadow-custom-light"
        />

        <Badge className="rounded-full absolute -bottom-5 left-12 px-1 py-1 bg-white shadow-custom-light hover:bg-primary animate-float-2">
          <Image src="/nodejs-ico.png" alt="Memoji" width={25} height={25} />
        </Badge>

        <Badge className="rounded-full absolute bottom-10 -left-5 px-1 py-1 bg-white shadow-custom-light hover:bg-primary animate-float-3">
          <Image src="/react-ico.png" alt="Memoji" width={25} height={25} />
        </Badge>

        <Badge className="rounded-full absolute top-12 -right-5 px-1 py-1 bg-white shadow-custom-light hover:bg-primary animate-float-3">
          <Image src="/nextjs-ico.png" alt="Memoji" width={25} height={25} />
        </Badge>

        <Badge className="rounded-full absolute top-6 -left-3 px-1 py-1 bg-white shadow-custom-light hover:bg-primary animate-float-1">
          <Image
            src="/javascript-ico.png"
            alt="Memoji"
            width={25}
            height={25}
          />
        </Badge>

        <Badge className="rounded-full absolute bottom-8 -right-3 bg-white px-1 py-1 shadow-custom-light hover:bg-primary animate-float-2">
          <Image
            src="/typescript-ico.png"
            alt="Memoji"
            width={25}
            height={25}
          />
        </Badge>
      </div>
    </div>
  )
}
