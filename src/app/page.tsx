import { CardBox } from './_components/CardBox'
import { Header } from './_components/Header'

export default function Home() {
  const jobs = [
    {
      avatar: '/institutions/carefy-logo.png',
      title: 'Desenvolvedor Full Stack (Estágio)',
      description: 'Carefy',
      duration: '2024 - 2024',
    },
    {
      avatar: '/institutions/freelancer.jpg',
      title: 'Desenvolvedor Full Stack',
      description: 'P H C De Freitas Serviços de Informações',
      duration: '2021 - 2024',
    },
  ]

  const volunteer = [
    {
      avatar: '/institutions/docunder-logo.jpg',
      title: 'Desenvolvedor Back-end',
      description: 'Docunder',
      duration: '2024 - Atual',
    },
    {
      avatar: '/institutions/leaf-pallete-logo.png',
      title: 'Desenvolvedor Front-end',
      description: 'Leaf Pallete',
      duration: '2024 - Atual',
    },
  ]

  const education = [
    {
      avatar: '/institutions/fiap-logo.png',
      title: 'FIAP',
      description: 'Bacharelado em Engenharia de Software',
      duration: '2024 - 2027',
    },
    {
      avatar: '/institutions/full-cycle-logo.jpeg',
      title: 'Full Cycle',
      description: 'Curso Full Cycle 3.0',
      duration: '2024',
    },
    {
      avatar: '/institutions/ita-logo.png',
      title: 'Instituto Tecnológico de Aeronáutica',
      description: 'Curso Orientação a Objetos com Java',
      duration: '2024',
    },
    {
      avatar: '/institutions/rocketseat-logo.png',
      title: 'Rocketseat',
      description: 'Curso Ignite',
      duration: '2023',
    },
    {
      avatar: '/institutions/dio-logo.jpeg',
      title: 'DIO',
      description: 'Bootcamp Potência Tech iFood',
      duration: '2023',
    },
    {
      avatar: '/institutions/barao-de-maua-logo.png',
      title: 'Barão de Mauá',
      description: 'Tecnólogo em Produção Audiovisual',
      duration: '2018 - 2019',
    },
  ]

  return (
    <main className="flex flex-col justify-center mt-8 gap-5 bg-background">
      <Header />
      <CardBox
        title="Sobre mim"
        link="/about"
        linkText="Saiba mais"
        description="Desenvolvedor full stack com mais de 3 anos de experiência, graduando em Engenharia de Software pela FIAP. Especializado no ecossistema JavaScript e Java com amplo domínio em frameworks e bibliotecas como Next.js, NestJS e Spring. Experiência avançada em TypeScript, React, Node.js, e bancos de dados SQL e NoSQL. Proativo e comprometido, sempre priorizo a experiência do usuário, performance, testes e escalabilidade. Atualmente estudando Golang."
      />
      <div className="grid grid-cols-2 gap-5 max-[840px]:flex max-[840px]:flex-col">
        <div className="grid grid-cols-1 gap-4 max-[840px]:flex max-[840px]:flex-col">
          <CardBox
            title="Experiência Profissional"
            buttonText="Baixar meu currículo"
            buttonIcon="download"
            activity={jobs}
          />
          <CardBox title="Trabalho Voluntário" activity={volunteer} />
        </div>
        <CardBox
          title="Formação"
          activity={education}
          link="/certificates"
          linkText="Certificados"
        />
      </div>
    </main>
  )
}
