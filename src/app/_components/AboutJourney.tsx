import Image from 'next/image'
import { AboutHobbies } from './AboutHobbies'

export function AboutJourney() {
  return (
    <section>
      <div className="flex flex-col gap-5 my-10">
        <h2 className="text-2xl font-bold">O início da jornada do herói:</h2>
        <div className="flex flex-row justify-between gap-5 mb-5">
          <Image
            src="/screenshot-1.png"
            alt="Logo"
            width={280}
            height={934}
            priority={true}
            className="rounded-lg border-solid border border-border shadow-custom-light"
          />
          <div className="w-fit pr-2">
            <p className="mt-2 text-foreground font-medium opacity-80">
              No início de 2018 comecei um novo hobby, animes. Fiquei
              extremamente viciado, mas naquela época era muito complicado para
              assistir, pois não eram tão acessíveis. Então, tive que buscar
              formas alternativas e fiquei frustado com as opções que encontrei,
              resolvi então{' '}
              <span className="font-extrabold text-primary">
                criar o meu próprio site
              </span>
              , mesmo sem nenhum conhecimento em programação. Aprendi a
              programar na marra, com a ajuda de alguns amigos e procurando
              tutoriais no YouTube, tentando e errando. Assim nasceu o{' '}
              <span className="font-extrabold text-primary">
                Animes One HD.
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-5">
          <div className="w-fit pr-2">
            <p className="mt-2 text-foreground font-medium opacity-80">
              Em alguns meses, o site já tinha{' '}
              <span className="font-extrabold text-primary">
                milhões de acessos e usuários.{' '}
              </span>
              Foi uma experiência incrível, que me fez apaixonar por
              programação, fiquei fascinado com o potencial que algumas linhas
              de código tinham. Mas só em 2021 comecei a me considerar um
              &quot;desenvolvedor&quot;, quando passei a{' '}
              <span className="font-extrabold text-primary">
                trabalhar para terceiros
              </span>{' '}
              e a estudar mais a fundo. Isso me permitiu monetizar meu
              conhecimento e viver de forma autônoma. Encerrei o ciclo do AOHD
              em 2023, mas ele sempre será meu xodó.
            </p>
          </div>
          <Image
            src="/screenshot-2.jpeg"
            alt="Logo"
            width={280}
            height={934}
            priority={true}
            className="rounded-lg border-solid border border-border shadow-custom-light"
          />
        </div>

        <AboutHobbies />

        <h2 className="text-2xl font-bold">Novos horizontes:</h2>
        <div className="flex flex-row justify-between gap-5">
          <Image
            src="/screenshot-3.jpg"
            alt="Logo"
            width={250}
            height={934}
            priority={true}
            className="rounded-lg border-solid border border-border shadow-custom-light"
          />
          <div className="w-fit pr-2">
            <p className="mt-2 text-foreground font-medium opacity-80">
              Apesar de ser formado em Produção Audiovisual, optei por não
              permanecer na área, pois felizmente minha paixão era outra. Depois
              de muito tempo pensando, decidi que em 2024 era hora de realmente
              começar uma
              <span className="font-extrabold text-primary">
                {' '}
                carreira de verdade
              </span>
              , me matriculei na faculdade de Engenharia de Software, encerrei
              meu CNPJ de prestador de serviço, me preparei financeriamente para
              a jornada e comecei a focar 100% nos estudos novamente. Agora cá
              estou eu, tentando me inserir no mercado, depois de passar bons
              anos como autônomo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
