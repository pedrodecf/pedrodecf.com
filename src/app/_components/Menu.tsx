'use client'

import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  PersonIcon,
  ReaderIcon,
  RocketIcon,
} from '@radix-ui/react-icons'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export function Menu() {
  return (
    <header className="flex justify-center">
      <nav className="w-custom-840 flex justify-center mb-3 py-1 border-solid border border-border rounded-lg shadow-custom-light">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="my-1">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <HomeIcon className="pr-1 mr-1" /> Início
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="h-7" />

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <PersonIcon className="pr-1 mr-1" /> Sobre mim
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="h-7" />

            <NavigationMenuItem>
              <Link href="/skills" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <RocketIcon className="pr-1 mr-1" />
                  Tecnologias
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="h-7" />

            <NavigationMenuItem>
              <Link href="/certificates" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <ReaderIcon className="pr-1 mr-1" /> Certificados
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="h-7" />

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <EnvelopeClosedIcon className="pr-1 mr-1" />
                  Contato
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="h-7" />

            <NavigationMenuItem className="relative">
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <GitHubLogoIcon className="pr-1 mr-1 " />
                  Portfólio
                  <Badge className="absolute -top-2 -right-0.5 rounded-full px-1 shadow-none text-xs hover:bg-primary">
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
