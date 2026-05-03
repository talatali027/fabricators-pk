'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { BRAND } from '@/lib/data'

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-steel-950/90 backdrop-blur-md border-steel-800 py-3'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <Logo size={40} showText={true} />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path
                return (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className={`font-rajdhani text-sm uppercase tracking-widest transition-colors duration-300 relative group ${
                        isActive ? 'text-chrome-shine' : 'text-chrome-mid hover:text-chrome-light'
                      }`}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-px bg-chrome-mid transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-ghost py-2 px-6 text-xs">
              Get Quote
            </a>
          </nav>

          <button className="lg:hidden relative z-50 text-chrome-light p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-steel-950/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <ul className="flex flex-col items-center gap-8 w-full px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className={`font-bebas text-4xl tracking-widest transition-colors duration-300 ${
                    pathname === link.path ? 'text-chrome-shine' : 'text-chrome-dark hover:text-chrome-light'
                  }`}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mt-8">
                <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-chrome">
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}