import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header2 } from './componentes/header/Header2'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Casa Lindner',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header2 />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
