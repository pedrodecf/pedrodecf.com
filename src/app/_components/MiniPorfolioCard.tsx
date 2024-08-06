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
import { Badge } from '../../components/ui/badge'

interface PortfolioCardProps {
  project: {
    title: string
    description: string
    projectLink?: string
    githubLink?: string
    tags: string[]
  }
}

export function MiniPortfolioCard({
  project: { title, description, projectLink, githubLink, tags },
}: PortfolioCardProps) {
  return (
    <FadeIn>
      <Card className="w-full">
        <CardHeader className="-mb-5">
          <h2 className="font-bold text-lg">{title}</h2>
        </CardHeader>
        <CardContent>
          {tags.map((tag, index) => (
            <Badge key={index} className="mr-2 mb-2 " variant="outline">
              {tag}
            </Badge>
          ))}
          <p className="line-clamp-3 mt-2 -mb-2">{description}</p>
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
