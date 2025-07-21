'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { useTheme } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'

export default function NavigationShell({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 text-foreground relative overflow-x-hidden">
      {/* Background glow with parallax effect */}
      <motion.div
        className="fixed inset-0 -z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute w-[60vw] h-[60vw] bg-gradient-to-tr from-purple-400 via-pink-400 to-yellow-300 rounded-full mix-blend-overlay opacity-20 blur-3xl animate-pulse-slow left-[-20%] top-[-10%]"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute w-[50vw] h-[50vw] bg-gradient-to-br from-sky-300 via-emerald-300 to-lime-200 rounded-full mix-blend-overlay opacity-20 blur-2xl animate-pulse-slow right-[-10%] bottom-[-10%]"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
      </motion.div>

      {/* Navigation bar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/80 shadow-sm"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link
                href="#home"
                onClick={() => scrollToSection('home')}
                className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
              >
                RafiDev
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-6">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-1 py-2 text-sm font-medium transition-all ${
                    activeSection === item
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-foreground'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeSection === item && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute left-0 top-full block h-0.5 w-full bg-primary"
                      transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
                    />
                  )}
                </motion.button>
              ))}

              {mounted && (
                <motion.button
                  whileTap={{ rotate: 90 }}
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-accent transition"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-purple-600" />
                  )}
                </motion.button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-full hover:bg-accent transition"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-background px-4 py-4 space-y-4"
            >
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-left w-full text-sm text-foreground/90 hover:text-primary transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Page Content */}
      <motion.main
        className="pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="bg-background/80 border-t border-muted-foreground/10 py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0"
            >
              RafiDev
            </motion.div>
            <div className="flex space-x-6">
              {[
                { icon: <Github className="h-5 w-5" />, url: 'https://github.com' },
                { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
                { icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com' },
                { icon: <Mail className="h-5 w-5" />, url: 'mailto:contact@example.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-muted-foreground/10 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Rafi Fauzan. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
