import { Header } from './_components/Header'
import { ModeToggle } from './_components/ModeToggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <ModeToggle />
    </main>
  )
}
