import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Search, Code2, FileText, Target, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

const itemIcons = [Search, TrendingUp, Code2, FileText, TrendingUp, Search]
const itemColors = ['teal', 'gold', 'teal', 'gold', 'gold', 'teal']
const itemTags = ['SEO', 'Web Engine', 'Software', 'Content', 'Web Engine', 'SEO']
const itemCategories = ['SEO', 'Web Engine', 'Software', 'Content', 'Web Engine', 'SEO']

const colorMap = {
  teal: {
    bg: 'bg-teal-50',
    icon: 'text-teal-500',
    badge: 'bg-teal-100 text-teal-700',
    goal: 'text-teal-600 bg-teal-50',
  },
  gold: {
    bg: 'bg-gold-50',
    icon: 'text-gold-500',
    badge: 'bg-gold-100 text-gold-700',
    goal: 'text-gold-600 bg-gold-50',
  },
}

export default function Portfolio() {
  const sectionRef = useRef(null)
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en
  const [activeIdx, setActiveIdx] = useState(0)

  const filtered = activeIdx === 0
    ? t.portfolio.items.map((item, i) => ({ ...item, _i: i }))
    : t.portfolio.items
        .map((item, i) => ({ ...item, _i: i }))
        .filter(item => itemCategories[item._i] === t.portfolio.categories[activeIdx])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span className="text-teal-600 text-sm font-semibold">{t.portfolio.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            {t.portfolio.h2a}{' '}
            <span className="text-gradient-teal">{t.portfolio.h2b}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.portfolio.desc}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
          {t.portfolio.categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveIdx(idx)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeIdx === idx
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/30'
                  : 'bg-white text-gray-600 hover:text-teal-600 border border-gray-200 hover:border-teal-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const i = p._i
            const color = itemColors[i]
            const c = colorMap[color]
            const Icon = itemIcons[i]
            return (
              <div
                key={i}
                className="animate-on-scroll bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`h-40 ${c.bg} flex items-center justify-center relative overflow-hidden`}>
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    <Icon size={28} className={c.icon} />
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-dark-800 text-xs font-bold rounded-full">
                    {p.industry}
                  </span>
                  <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${c.badge}`}>
                    {itemTags[i]}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark-800 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold ${c.goal}`}>
                    <Target size={14} />
                    {p.goal}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="animate-on-scroll text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            {t.portfolio.ctaDesc}
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-md shadow-teal-500/30 hover:scale-105"
          >
            {t.portfolio.cta}
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
