import { Separator } from '@/components/ui/separator'
import { AboutHeader } from '../_components/AboutHeader'
import { AboutJourney } from '../_components/AboutJourney'
import { AboutPokemonTeam } from '../_components/AboutPokemonTeam'

export default function About() {
  return (
    <main className="flex flex-col justify-center mt-8">
      <AboutHeader />
      <AboutJourney />
      <Separator />
      <AboutPokemonTeam />
      <Separator />
    </main>
  )
}
