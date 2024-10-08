import Image from 'next/image'
import { FadeIn } from './animations/FadeIn'

export function AboutJourney() {
  return (
    <section>
      <div className="flex flex-col gap-5 my-10 bg-background max-[840px]:mt-14">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-bold mb-3 max-[840px]:text-xl max-[840px]:mb-2 max-[840px]:text-center">
            Resumo profissional:
          </h2>
          <div className="flex flex-col justify-between gap-1 mb-5 max-[840px]:flex-col">
            <p className="mt-2 text-opaque font-medium max-[840px]:text-center">
              Especializado em{' '}
              <span className="font-extrabold text-primary">
                JavaScript e Java
              </span>
              , com domínio em frameworks como Next.js, NestJS e Spring. Tenho
              habilidades avançadas em TypeScript, React, Node.js, e bancos de
              dados como MySQL, PostgreSQL, Redis e MongoDB, além de experiência
              com Docker, Kubernetes e ferramentas DevOps como Ansible,
              SonarQube e Terraform.
            </p>
            <p className="mt-2 text-opaque font-medium max-[840px]:text-center">
              Em minha experiência profissional na Carefy, desenvolvi
              dashboards, otimizei processos internos e realizei análises em
              bancos de dados MySQL. Já como autônomo,{' '}
              <span className="font-extrabold text-primary">criei sites </span>
              de streaming de vídeo utilizando PHP, JavaScript, React, MySQL e
              WordPress, e gerenciei infraestrutura em servidores VPS.
            </p>

            <p className="mt-2 text-opaque font-medium max-[840px]:text-center">
              Atualmente, contribuo para o projeto Leaf Pallete, desenvolvendo
              interfaces com TypeScript, React, Next.js 14 e Tailwind CSS, e
              desenvolvo a plataforma Docunder com TypeScript, Node.js e NestJS.{' '}
              <span className="font-extrabold text-primary">
                Sou graduando em Engenharia de Software pela FIAP
              </span>
              , tenho cursos complementares em desenvolvimento full stack e
              DevOps pela Full Cycle, Rocketseat, ITA (Coursera) e DIO.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-bold mb-5 max-[840px]:text-xl max-[840px]:mb-2 max-[840px]:text-center">
            O início da jornada do herói:
          </h2>
          <div className="flex flex-row justify-between gap-5 mb-5 max-[840px]:flex-col">
            <Image
              src="/screenshots/screenshot-1.png"
              alt="Logo"
              width={274}
              height={154}
              priority={true}
              className="rounded-lg border-solid border border-border shadow-custom-light max-[840px]:w-full"
            />
            <div className="w-fit pr-2">
              <p className="mt-2 text-opaque font-medium max-[840px]:text-center">
                No início de 2018 comecei um novo hobby, animes. Fiquei
                extremamente viciado, mas naquela época era muito complicado
                para assistir, pois não eram tão acessíveis. Então, tive que
                buscar formas alternativas e fiquei frustado com as opções que
                encontrei, resolvi então{' '}
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
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <div className="flex flex-row justify-between gap-5 max-[840px]:flex-col-reverse">
            <div className="w-fit pr-2">
              <p className="mt-2 text-opaque font-medium max-[840px]:text-center">
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
              src="/screenshots/screenshot-2.jpeg"
              alt="Logo"
              width={274}
              height={154}
              priority={true}
              className="rounded-lg border-solid border border-border shadow-custom-light max-[840px]:w-full"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-row justify-between gap-5  max-[840px]:flex-col">
            <Image
              src="/screenshots/screenshot-3.jpg"
              alt="Logo"
              width={274}
              height={154}
              priority={true}
              className="rounded-lg border-solid border border-border shadow-custom-light max-[840px]:w-full"
            />
            <div className="w-fit pr-2">
              <p className="mt-2 text-opaque font-medium max-[840px]:text-center">
                Apesar de ser formado em Produção Audiovisual, optei por não
                permanecer na área, pois felizmente minha paixão era outra.
                Depois de muito tempo pensando, decidi que em 2024 era hora de
                realmente começar uma
                <span className="font-extrabold text-primary">
                  {' '}
                  carreira de verdade
                </span>
                , me matriculei na faculdade de Engenharia de Software, encerrei
                meu CNPJ de prestador de serviço, me preparei financeriamente
                para a jornada e comecei a focar 100% nos estudos novamente.
                Agora cá estou eu, tentando me inserir no mercado, depois de
                passar bons anos como autônomo.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
