import { CardBox } from './_components/CardBox'
import { Header } from './_components/Header'
import { ModeToggle } from './_components/ModeToggle'

export default function Home() {
  const jobs = [
    {
      avatar: '/carefy-logo.png',
      title: 'Desenvolvedor Full Stack (Estágio)',
      description: 'Carefy',
      duration: '2024 - 2024',
    },
    {
      avatar: '/freelancer.jpg',
      title: 'Desenvolvedor Full Stack',
      description: 'P H C De Freitas Serviços de Informações',
      duration: '2021 - 2024',
    },
  ]

  const education = [
    {
      avatar: '/fiap-logo.png',
      title: 'FIAP',
      description: 'Bacharelado em Engenharia de Software',
      duration: '2024 - 2027',
    },
    {
      avatar: '/full-cycle-logo.jpeg',
      title: 'Full Cyle',
      description: 'Curso Full Cycle 3.0',
      duration: '2024',
    },
    {
      avatar: '/rocketseat-logo.png',
      title: 'Rocketseat',
      description: 'Curso Ignite',
      duration: '2024',
    },
    {
      avatar: '/barao-de-maua-logo.png',
      title: 'Barão de Mauá',
      description: 'Produção Audiovisual',
      duration: '2018 - 2019',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <CardBox
        title="Sobre mim"
        link="/about"
        linkText="Saiba mais"
        description="Me chamo Pedro de Freitas e sou desenvolvedor há 3 anos, 
        especializado em desenvolvimento web. Tenho amplo domínio do ecossistema 
        JavaScript e conhecimento em diversos frameworks. Trabalho com APIs REST e 
        GraphQL, além de mensageria e microserviços. Utilizo práticas de clean code e 
        SOLID, com experiência em bancos de dados SQL e NoSQL. Sempre priorizo a 
        experiência do usuário, performance, testes e escalabilidade. Sou proativo, 
        comprometido e busco constantemente aprimorar minhas habilidades técnicas."
      />
      <CardBox
        title="Experiência Profissional"
        buttonText="Baixar meu currículo"
        buttonIcon="download"
        activity={jobs}
      />
      <CardBox
        title="Formação"
        activity={education}
        link="/certificates"
        linkText="Certificados"
      />
      <ModeToggle />
    </main>
  )
}
