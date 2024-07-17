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
  title: 'Pedro de Freitas, Full Stack Developer',
  description: 'Generated by create next app',
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
          'min-h-screen bg-background font-sans antialiased relative',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle className="fixed top-5 right-5" />
          <div className="w-custom-840 mt-5 mx-auto ">
            <Menu />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
