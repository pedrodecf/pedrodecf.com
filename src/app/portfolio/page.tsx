import { FadeIn } from '../_components/animations/FadeIn'
import { MiniPortfolioCard } from '../_components/MiniPorfolioCard'
import { PortfolioCard } from '../_components/PorfolioCard'

export default function Portfolio() {
  const projects = [
    {
      image: '/portfolio/screenshot-2.png',
      title: 'Sofftek AI Chat',
      description:
        'Um chat alimentado por IA com o propósito de ajudar os profissionais de Service Desk do time da Softtek. Desenvolvido para o FIAP Challenge 2024.',
      projectLink: 'https://youtu.be/ruH5agMbmcA',
    },
    {
      image: '/portfolio/screenshot-4.jpg',
      title: 'Orange Portfólio (Front-end)',
      description:
        'Desenvolvido durante o hackathon realizado pela FCamara, em uma squad de 4 membros, utiliza React, TypeScript, Material UI e Styled-Components.',
      projectLink: 'https://orange-front-end.onrender.com',
      githubLink: 'https://github.com/MatheusSanchez/orange-front',
    },
    {
      image: '/portfolio/screenshot-3.jpg',
      title: 'Orange Portfólio (Back-end)',
      description:
        'Desenvolvido durante o hackathon realizado pela FCamara, em uma squad de 4 membros, utiliza Node.js, AWS, Docker, Postgres e Prisma.',
      githubLink: 'https://github.com/MatheusSanchez/orange-back',
    },
    {
      image: '/portfolio/screenshot-1.jpg',
      title: 'AnimesOneHD',
      description:
        'Criado em 2018, utilizava PHP e MySQL. Alcançou em seu auge quase 40 milhões de acessos mensais. Permanentemente fora do ar.',
      projectLink: '/about',
    },
  ]

  const otherProjects = [
    {
      title: 'Gympass (Back-end)',
      description:
        'Api desenvolvida para simular um sistema de check-in de academias, utilizando Node.js, Docker, Fastify, Zod e PostgreSQL.',
      githubLink: 'https://github.com/pedrodecf/gympass-api',
    },
    {
      title: 'Find-a-friend (Back-end)',
      description:
        'Api desenvolvida para um sistema de adoção de animais, utilizando Node.js, Docker, Fastify, Zod e PostgreSQL.',
      githubLink: 'https://github.com/pedrodecf/find-a-friend-api',
    },
    {
      title: 'Woovi Challenge (Front-end)',
      description:
        'Desafio para front-end, tela mobile estática usando React, JavaScript e Material UI. Simulando um sistema de pagamentos',
      projectLink: 'https://woovi-frontend-enginner-challenge.vercel.app/',
      githubLink:
        'https://github.com/pedrodecf/woovi-frontend-enginner-challenge',
    },
    {
      title: 'Ambulnzllc Challenge (Back-end)',
      description:
        'Desafio para back-end, api simples desenvolvida para um sistema de pizzaria, utilizando Node.js, Docker, Fastify, Zod e MySQL.',
      githubLink: 'https://github.com/pedrodecf/ambulnzllc-fullstack-challenge',
    },
    {
      title: 'Buildbox Challenge (Front-end)',
      description:
        'Desafio para front-end, tela de upload simples desenvolvida com TypeScript, React e Styled-Components.',
      projectLink: 'https://buildboxwebchallenge-pedrodecf.netlify.app/',
      githubLink:
        'https://github.com/pedrodecf/buildbox-web-developer-challenge',
    },
    {
      title: 'Tcholas Odyssey The Game',
      description:
        'Um jogo feito para o curso da DIO e iFood, utiliza apenas HTML, CSS e JavaScript. Fiz toda a manipulação de imagens pelo PhotoShop',
      projectLink: 'https://pedrodecf.github.io/tcholas-odyssey-the-game/',
      githubLink: 'https://github.com/pedrodecf/tcholas-odyssey-the-game',
    },
  ]

  return (
    <main className="flex flex-col justify-center mt-8 gap-5">
      <h2 className="text-2xl font-bold">Portfolio: </h2>
      <div className="grid grid-cols-2 gap-5 max-[840px]:flex max-[840px]:flex-col">
        {projects.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </div>
      <FadeIn as="h2" className="text-2xl font-bold mt-8">
        Projetos menores:
      </FadeIn>
      <div className="grid grid-cols-2 gap-5 max-[840px]:flex max-[840px]:flex-col">
        {otherProjects.map((project, index) => (
          <MiniPortfolioCard key={index} project={project} />
        ))}
      </div>
    </main>
  )
}
