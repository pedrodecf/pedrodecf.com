import { AboutHeader } from '../_components/AboutHeader'
import { AboutPokemonTeam } from '../_components/AboutPokemonTeam'

export default function About() {
  return (
    <main className="flex justify-center">
      <section className="flex flex-col gap-6 m-8 w-custom-840">
        <AboutHeader />
        <AboutPokemonTeam />
      </section>
    </main>
  )
}
