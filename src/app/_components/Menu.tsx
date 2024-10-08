'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  PersonIcon,
  ReaderIcon,
  RocketIcon,
} from '@radix-ui/react-icons'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../../components/ui/navigation-menu'
import { Separator } from '../../components/ui/separator'
import { Badge } from '../../components/ui/badge'

interface MenuProps {
  className?: string
}

export function Menu({ className }: MenuProps) {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <header className={className}>
      <nav className="w-[840px] flex justify-center mb-3 py-1 border-solid border border-border rounded-lg shadow-custom-light max-[840px]:w-full max-[840px]:mb-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="my-1 max-[840px]:my-0">
              <Link href="/" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${pathname === '/' ? 'bg-primary text-accent-foreground' : ''}`}
                >
                  <HomeIcon className="pr-1 mr-1 max-[840px]:pr-0 max-[840px]:mx-2" />
                  <span className="max-[840px]:hidden">Início</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="h-7" />

            <NavigationMenuItem>
              <Link href="/about" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${pathname === '/about' ? 'bg-primary text-accent-foreground' : ''}`}
                >
                  <PersonIcon className="pr-1 mr-1 max-[840px]:pr-0 max-[840px]:mx-2" />
                  <span className="max-[840px]:hidden">Sobre mim</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="h-7" />

            <NavigationMenuItem>
              <Link href="/skills" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${pathname === '/skills' ? 'bg-primary text-accent-foreground' : ''}`}
                >
                  <RocketIcon className="pr-1 mr-1 max-[840px]:pr-0 max-[840px]:mx-2" />
                  <span className="max-[840px]:hidden">Tecnologias</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="h-7" />

            <NavigationMenuItem>
              <Link href="/certificates" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${pathname === '/certificates' ? 'bg-primary text-accent-foreground' : ''}`}
                >
                  <ReaderIcon className="pr-1 mr-1 max-[840px]:pr-0 max-[840px]:mx-2" />{' '}
                  <span className="max-[840px]:hidden">Certificados</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="h-7" />

            <NavigationMenuItem>
              <Link href="/contact" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${pathname === '/contact' ? 'bg-primary text-accent-foreground' : ''}`}
                >
                  <EnvelopeClosedIcon className="pr-1 mr-1 max-[840px]:pr-0 max-[840px]:mx-2" />
                  <span className="max-[840px]:hidden">Contato</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="h-7" />

            <NavigationMenuItem className="relative">
              <Link href="/portfolio" passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${pathname === '/portfolio' ? 'bg-primary text-accent-foreground' : ''}`}
                >
                  <GitHubLogoIcon className="pr-1 mr-1 max-[840px]:pr-0 max-[840px]:mx-2 " />
                  <span className="max-[840px]:hidden">Portfólio</span>
                  <Badge className="absolute -top-2 -right-0.5 rounded-full px-1 shadow-none text-xs hover:bg-primary max-[840px]:hidden">
                    🔥
                  </Badge>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  )
}
