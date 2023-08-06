
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ThemeProvider } from '@/components/theme-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fitme',
  description: 'Best gym you can find in california',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {




  return (

    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">

        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="gradient "></div>
          {children}
          </ThemeProvider>
        </body>

      </html>
    </ClerkProvider>
  )

}
