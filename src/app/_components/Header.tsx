import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export function Header() {
  return (
    <section className="flex gap-6">
      <Image
        src="/profile-pic.jpeg"
        alt="Logo"
        width={100}
        height={100}
        priority={true}
        className="rounded-lg border-solid border border-border shadow-custom-light"
      />
      <div className="flex flex-col align-middle justify-center">
        <div className="flex items-center">
          <h1 className="font-extrabold text-3xl">Pedro de Freitas</h1>{' '}
          <Badge
            variant="outline"
            className="ml-2 rounded-full p-1 shadow-custom-light hover:bg-primary"
          >
            <Image src="/memoji1.png" alt="memoji" width={25} height={25} />
          </Badge>
        </div>
        <p className="text-foreground font-medium opacity-60">
          Desenvolvedor Full Stack
        </p>
        <div className="flex gap-3 mt-2">
          <Badge variant="default">React</Badge>
          <Badge variant="default">Node.js</Badge>
          <Badge variant="default">Next.js</Badge>
          <Badge variant="default">NestJS</Badge>
          <Badge variant="default">JavaScript</Badge>
          <Badge variant="default">TypeScript</Badge>
        </div>
      </div>
    </section>
  )
}
