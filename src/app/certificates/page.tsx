import { Frame } from '../_components/Frame'

export default function Certificates() {
  return (
    <main className="flex flex-col justify-center mt-8 gap-5">
      <h2 className="text-2xl font-bold">Certificados:</h2>
      <div className="flex flex-wrap gap-3">
        <Frame
          title="Discover - Rocketseat"
          certificate="/certificates/certificate-1.jpg"
        />
        <Frame
          title="Bootcamp Potência Tech iFood Desenvolvimento de Jogos - DIO"
          certificate="/certificates/certificate-2.jpg"
        />
        <Frame
          title="Explorer - Rocketseat"
          certificate="/certificates/certificate-3.jpg"
        />
        <Frame
          title="Programa de Formação Season 05 - FCamara"
          certificate="/certificates/certificate-4.jpg"
        />
        <Frame
          title="ReactJS - Rocketseat"
          certificate="/certificates/certificate-5.jpg"
        />
        <Frame
          title="Node.js - Rocketseat"
          certificate="/certificates/certificate-6.jpg"
        />
        <Frame
          title="Docker - Full Cycle"
          certificate="/certificates/certificate-7.jpg"
        />
        <Frame
          title="Arquitetura de Software - Full Cycle"
          certificate="/certificates/certificate-8.jpg"
        />
        <Frame
          title="Formação Next.js 14 - Alura"
          certificate="/certificates/certificate-9.jpg"
        />
      </div>
    </main>
  )
}
