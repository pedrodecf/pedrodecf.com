import Link from 'next/link'
import { FadeIn } from '../_components/animations/FadeIn'
import { MiniPortfolioCard } from '../_components/MiniPorfolioCard'
import { PortfolioCard } from '../_components/PorfolioCard'

export default function Portfolio() {
  const projects = [
    {
      image: '/portfolio/leaf-pallete.jpg',
      title: 'Leaf Palette',
      description:
        'Leaf Pallete, uma aplicação web colaborativa que serve como um guia prático para designers. Desenvolvimento de interfaces com TypeScript, React, Next.js 14 e Tailwind CSS. Prototipação de interfaces no Figma e revisão de pull requests.',
      projectLink: 'https://www.leafpallete.com/',
      githubLink: 'https://github.com/Leaf-Pallete',
      tags: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      image: '/portfolio/docunder.jpg',
      title: 'Docunder',
      description:
        'Docunder, uma plataforma colaborativa de documentação técnica de hardware para instituições. Desenvolvimento utilizando TypeScript, Node.js e NestJS.',
      projectLink: 'https://docunder.onrender.com/',
      githubLink: 'https://github.com/Leaf-Pallete',
      tags: ['TypeScript', 'Node.js', 'NestJS', 'PostgreSQL'],
    },
    {
      image: '/portfolio/softtek-chat.jpg',
      title: 'Softtek AI Chat',
      description:
        'Um chat alimentado por IA generativa com o propósito de ajudar os profissionais de Service Desk do time da Softtek. Desenvolvido para o FIAP Challenge 2024.',
      projectLink: 'https://youtu.be/ruH5agMbmcA',
      tags: ['React', 'GPT-4o', 'Golang'],
    },
    {
      image: '/portfolio/screenshot-1.jpg',
      title: 'Animes One HD',
      description:
        'Criado em 2018, utilizava PHP e MySQL. Alcançou em seu auge quase 40 milhões de acessos mensais e mais de 2 milhões de usuários por mês. Permanentemente fora do ar.',
      projectLink: '/about',
      tags: ['React', 'PHP', 'MySQL', 'WordPress'],
    },
    {
      image: '/portfolio/screenshot-4.jpg',
      title: 'Orange Portfólio',
      description:
        'Uma aplicação de rede social, desenvolvido durante o hackathon realizado pela FCamara, em uma squad de 4 membros, utiliza Node.js, AWS, Docker, Postgres e Prisma.',
      projectLink: 'https://orange-front-end.onrender.com/',
      githubLink: 'https://github.com/MatheusSanchez/orange-back',
      tags: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
    },
    {
      image: '/portfolio/pedrodecf-com.jpg',
      title: 'pedrodecf.com',
      description:
        'Meu site pessoal, desenvolvido com TypeScript, React, Next.js 14, Tailwind CSS e Vercel. Animações utilizam Framer Motion, e a biblioteca de componentes é o Shadcn.',
      projectLink: 'https://pedrodecf.com/',
      githubLink: 'https://github.com/pedrodecf/pedrodecf.com',
      tags: ['Next.js 14', 'Tailwind CSS', 'Framer Motion'],
    },
  ]

  const otherProjects = [
    {
      title: 'Gympass API',
      description:
        'Api desenvolvida para simular um sistema de check-in de academias.',
      githubLink: 'https://github.com/pedrodecf/gympass-api',
      tags: ['Node.js', 'TypeScript', 'Fastify', 'PostgreSQL'],
    },
    {
      title: 'Find-a-friend API',
      description: 'Api desenvolvida para um sistema de adoção de animais.',
      githubLink: 'https://github.com/pedrodecf/find-a-friend-api',
      tags: ['Node.js', 'TypeScript', 'Fastify', 'PostgreSQL'],
    },
    {
      title: 'Buildbox Challenge',
      description:
        'Desafio para front-end, tela de upload simples utilizando local storage.',
      githubLink:
        'https://github.com/pedrodecf/buildbox-web-developer-challenge',
      tags: ['TypeScript', 'React', 'Styled-Components'],
    },
    {
      title: 'Jogo das Palavras Embaralhadas',
      description: 'Desafio no curso Orientação a Objetos com Java, do ITA.',
      githubLink: 'https://github.com/pedrodecf/embaralhador-java',
      tags: ['Java', 'JUnit'],
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
      <FadeIn as="p" className="text-center text-opaque">
        e muitos outros{' '}
        <Link
          href="https://github.com/pedrodecf?tab=repositories"
          target="_blank"
          className="underline"
        >
          aqui...
        </Link>
      </FadeIn>
    </main>
  )
}
