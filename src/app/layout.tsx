import type { Metadata } from 'next'
import { Nunito as FontSans } from 'next/font/google'
import './globals.css'
import { Menu } from './_components/Menu'
import { Footer } from './_components/Footer'
import { ModeToggle } from './_components/ModeToggle'
import { cn } from '../lib/utils'
import { ThemeProvider } from '../components/theme-provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: '@pedrodecf - Pedro de Freitas',
  description:
    'Bem-vindo ao meu portfólio! Aqui você encontrará meus projetos, habilidades e experiências em desenvolvimento de software. Explore e sinta-se à vontade para entrar em contato!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'bg-background font-sans antialiased min-h-screen',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <div className="fixed top-5 right-5 z-50">
            <ModeToggle />
          </div>
          <div className="flex flex-col min-h-screen items-center">
            <div className="w-[840px] flex-grow flex flex-col">
              <Menu className="mt-5" />
              <main className="flex-grow mt-5 bg-background ">{children}</main>
              <Footer className="mt-5 py-12 bg-background " />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
