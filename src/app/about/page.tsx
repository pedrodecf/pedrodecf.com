import { Separator } from '@/components/ui/separator'
import { AboutHeader } from '../_components/AboutHeader'
import { AboutJourney } from '../_components/AboutJourney'

export default function About() {
  return (
    <main className="flex flex-col justify-center mt-8">
      <AboutHeader />
      <AboutJourney />
      <Separator />
    </main>
  )
}
