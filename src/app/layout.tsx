import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Header from '@/components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'PokeNext',
    template: '%s | PokeNext'
  },
  description: 'Página inicial de PokeNext',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
