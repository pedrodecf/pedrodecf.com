'use client'

import { ArrowTopRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { FadeIn } from './animations/FadeIn'

interface PortfolioCardProps {
  project: {
    title: string
    description: string
    projectLink?: string
    githubLink?: string
  }
}

export function MiniPortfolioCard({
  project: { title, description, projectLink, githubLink },
}: PortfolioCardProps) {
  return (
    <FadeIn>
      <Card className="w-full">
        <CardHeader className="-mb-5">
          <h2 className="font-bold text-lg">{title}</h2>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="flex items-center gap-2 max-[840px]:items-start">
          {projectLink && (
            <Button asChild>
              <Link href={projectLink} target="_blank">
                Visualizar <ArrowTopRightIcon className="ml-1" />
              </Link>
            </Button>
          )}
          {githubLink && (
            <Button variant="outline" asChild>
              <Link href={githubLink} target="_blank">
                GitHub <GitHubLogoIcon className="ml-1" />
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </FadeIn>
  )
}
