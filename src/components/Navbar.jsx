import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

const navHrefs = [
  { key: 'home', href: '#home' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'process', href: '#process' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'pricing', href: '#pricing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const { lang, toggle } = useLanguage()
  const t = lang === 'id' ? id : en

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
    setActive(id)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg shadow-teal-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('#home')} className="flex-shrink-0 flex items-center">
            <Logo size="md" white={!scrolled} />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navHrefs.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.href.replace('#', '')
                    ? 'text-teal-500 bg-teal-50'
                    : scrolled
                    ? 'text-dark-800 hover:text-teal-500 hover:bg-teal-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {t.nav[link.key]}
              </button>
            ))}
          </nav>

          {/* CTA + lang toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggle}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all duration-200 ${
                scrolled
                  ? 'border-gray-200 text-dark-800 hover:border-teal-400 hover:text-teal-600'
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              {lang === 'id' ? 'EN' : 'ID'}
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-dark-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 shadow-xl">
          {navHrefs.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-4 py-3 text-dark-800 hover:text-teal-500 hover:bg-teal-50 rounded-lg text-sm font-medium transition-colors"
            >
              {t.nav[link.key]}
            </button>
          ))}
          <div className="flex gap-3 mt-3">
            <button
              onClick={toggle}
              className="flex-shrink-0 px-4 py-3 border border-gray-200 text-dark-800 text-sm font-bold rounded-xl transition-colors hover:border-teal-400 hover:text-teal-600"
            >
              {lang === 'id' ? 'EN' : 'ID'}
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="flex-1 py-3 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
