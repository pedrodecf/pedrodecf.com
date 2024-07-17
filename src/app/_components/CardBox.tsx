import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { DownloadIcon, CaretRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { FadeIn } from './animations/FadeIn'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '../../components/ui/card'
import { AvatarFallback } from '../../components/ui/avatar'
import { Button } from '../../components/ui/button'

interface CardProps {
  className?: string
  title: React.ReactNode
  link?: string
  linkText?: string
  description?: string
  buttonText?: string
  buttonIcon?: 'download' | 'edit' | 'delete'
  activity?: {
    avatar: string
    title: string
    description: string
    duration: string
  }[]
}

export function CardBox(props: CardProps) {
  const hasActivity = props.activity && props.activity.length > 0

  return (
    <FadeIn as="div" className={`${props.className}`} delay={0.1}>
      <Card>
        <CardHeader className="flex flex-row align-middle justify-between">
          <FadeIn
            as="h2"
            delay={0.1}
            className="text-xl font-bold flex items-center gap-2"
          >
            {props.title}
          </FadeIn>
          {props.link && (
            <Link
              className="text-xs flex align-middle text-primary underline"
              href={props.link}
            >
              {props.linkText}
              <CaretRightIcon />
            </Link>
          )}
        </CardHeader>

        {props.description && (
          <CardContent>
            <FadeIn as="p" delay={0.2} className="text-opaque font-medium">
              {props.description}
            </FadeIn>
          </CardContent>
        )}

        {hasActivity && (
          <CardContent>
            {props.activity!.map((item, index) => (
              <FadeIn
                as="div"
                key={index}
                className={`flex items-center gap-3 ${index < props.activity!.length - 1 ? 'mb-4' : ''}`}
                delay={parseFloat(`0.${index + 2}`)}
                startOnScrollIntersect={false}
              >
                <Avatar>
                  <AvatarImage
                    src={item.avatar}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="rounded-full p-1 border-solid border border-border shadow-custom-light"
                  />
                  <AvatarFallback className="rounded-full p-1 w-12 h-12 border-solid border border-border shadow-custom-light" />
                </Avatar>
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-xs font-medium text-opaque">
                    {item.description}
                  </p>
                  <p className="text-xs font-medium text-opaque">
                    {item.duration}
                  </p>
                </div>
              </FadeIn>
            ))}
          </CardContent>
        )}

        {props.buttonText && (
          <CardFooter>
            <Button className="w-full bg-gradient-to-l from-">
              {props.buttonIcon === 'download' && (
                <DownloadIcon className="mr-2 h-4 w-4" />
              )}
              {props.buttonText}
            </Button>
          </CardFooter>
        )}
      </Card>
    </FadeIn>
  )
}
