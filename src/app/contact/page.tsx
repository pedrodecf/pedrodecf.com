import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'
import { CardBox } from '../_components/CardBox'

export default function Contact() {
  return (
    <main className="flex flex-col justify-center mt-8 gap-5">
      <h2 className="text-2xl font-bold">Contato: </h2>
      <div className="flex flex-col gap-5">
        <CardBox
          title={
            <>
              <GitHubLogoIcon /> GitHub
            </>
          }
          link="https://github.com/pedrodecf"
          linkText="Acessar meu GitHub"
        />
        <CardBox
          title={
            <>
              <LinkedInLogoIcon /> LinkedIn
            </>
          }
          link="https://www.linkedin.com/in/pedrodecf/"
          linkText="Acessar meu LinkedIn"
        />
        <CardBox
          title={
            <>
              <EnvelopeClosedIcon /> E-mail
            </>
          }
          link="mailto:contato.pedrodecf@gmail.com"
          linkText="Enviar um e-mail"
        />
      </div>
    </main>
  )
}
