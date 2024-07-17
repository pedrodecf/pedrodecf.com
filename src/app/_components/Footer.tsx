import Link from 'next/link'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <p className="text-right text-foreground opacity-80 text-xs">
        made by{' '}
        <Link href="https://www.linkedin.com/in/pedrodecf/">@pedrodecf</Link>
      </p>
    </footer>
  )
}
