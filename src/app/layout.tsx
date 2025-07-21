import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import NavigationShell from '@/components/navigation-shell'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RafiDev Portfolio',
  description: 'My interactive portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationShell>{children}</NavigationShell>
        </ThemeProvider>
      </body>
    </html>
  )
}
