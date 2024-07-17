'use client'

import { DialogTitle } from '@radix-ui/react-dialog'
import { ArrowTopRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '../../components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../../components/ui/dialog'
import { Button } from '../../components/ui/button'
import { FadeIn } from './animations/FadeIn'

interface PortfolioCardProps {
  project: {
    title: string
    description: string
    image: string
    projectLink?: string
    githubLink?: string
  }
}

export function PortfolioCard({
  project: { title, description, image, projectLink, githubLink },
}: PortfolioCardProps) {
  return (
    <FadeIn>
      <Card className="w-full">
        <Dialog>
          <CardHeader>
            <DialogTrigger>
              <Image
                src={image}
                alt={title}
                width={640}
                height={480}
                className="cursor-pointer rounded-lg brightness-50 duration-500 hover:scale-105 hover:brightness-100 "
                priority={true}
              />
            </DialogTrigger>
            <DialogContent
              aria-describedby={undefined}
              className="max-w-[65vw]"
            >
              <DialogTitle className="sr-only">{title}</DialogTitle>
              <Image
                src={image}
                alt={title}
                quality={100}
                width={1280}
                height={720}
                priority={true}
              />
            </DialogContent>
          </CardHeader>
        </Dialog>
        <CardContent>
          <h2 className="font-bold text-lg">{title}</h2>
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
