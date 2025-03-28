import React,{ReactElement,ReactNode} from 'react'
import {Inter} from 'next/font/google'
import "@/styles/globals.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const inter = Inter({subsets:['cyrillic-ext','greek','latin','vietnamese']})

export default function RootLayout({
  children,
}:{children:ReactNode}):ReactElement {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}
