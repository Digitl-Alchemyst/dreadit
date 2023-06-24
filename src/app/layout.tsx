import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import Navbar from '@/components/global/Navbar'
import { Toaster } from '@/components/ui/Toaster'


export const metadata = {
  title: 'Dreadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn(
      'bg-zinc-950 antialiased dark', 
      inter.className
    )}>
      <body className='min-h-screen pt-12 bg bg-zinc-950 antialiased'>

        <Navbar />
        
        <div className='container max-w-7xl mx-auto h-full pt-12'>
          {children}
        </div>

        <Toaster />
      </body>
    </html>
  )
}
