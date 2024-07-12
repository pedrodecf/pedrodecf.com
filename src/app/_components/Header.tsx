import Image from 'next/image'

export function Header() {
  return (
    <header>
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      <h1>Pedro de Freitas</h1>
      <p>Desenvolvedor Full Stack</p>
    </header>
  )
}
