import { AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { DownloadIcon, CaretRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

interface CardProps {
  title: string
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
    <Card>
      <CardHeader className="flex flex-row align-middle justify-between">
        <h2 className="text-xl font-bold">{props.title}</h2>
        {props.link && (
          <Link
            className="text-xs flex align-middle text-primary hover:text-violet-800 transition-all "
            href={props.link}
          >
            {props.linkText}
            <CaretRightIcon />
          </Link>
        )}
      </CardHeader>

      {props.description && (
        <CardContent>
          <p className="text-foreground font-medium opacity-60">
            {props.description}
          </p>
        </CardContent>
      )}

      {hasActivity && (
        <CardContent>
          {props.activity!.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 ${
                props.activity!.length > 1 && index < props.activity!.length - 1
                  ? 'mb-4'
                  : ''
              }`}
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
                <p className="text-xs font-medium opacity-60">
                  {item.description}
                </p>
                <p className="text-xs font-medium opacity-60">
                  {item.duration}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      )}

      {props.buttonText && (
        <CardFooter>
          <Button className="w-full">
            {props.buttonIcon === 'download' && (
              <DownloadIcon className="mr-2 h-4 w-4" />
            )}
            {props.buttonText}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
