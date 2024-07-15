import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-12">
      <p className="text-right text-white opacity-80 text-xs">
        made by{' '}
        <Link href="https://www.linkedin.com/in/pedrodecf/">@pedrodecf</Link>
      </p>
    </footer>
  )
}
