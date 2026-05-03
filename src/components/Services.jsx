import { useRef, useEffect } from 'react'
import { Globe, Search, FileText, Code2, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

const serviceIcons = [Globe, Search, FileText, Code2]
const serviceColors = ['teal', 'gold', 'teal', 'gold']

const colorMap = {
  teal: {
    icon: 'bg-teal-50 text-teal-500',
    badge: 'bg-teal-500 text-white',
    border: 'border-teal-100 hover:border-teal-300',
    check: 'text-teal-500',
    btn: 'text-teal-600 hover:text-teal-700',
    glow: 'hover:shadow-teal-100',
  },
  gold: {
    icon: 'bg-gold-50 text-gold-500',
    badge: 'bg-gold-500 text-white',
    border: 'border-gold-100 hover:border-gold-300',
    check: 'text-gold-500',
    btn: 'text-gold-600 hover:text-gold-700',
    glow: 'hover:shadow-gold-100',
  },
}

export default function Services() {
  const sectionRef = useRef(null)
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en

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
    <section id="services" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span className="text-teal-600 text-sm font-semibold">{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            {t.services.h2a}{' '}
            <span className="text-gradient-teal">{t.services.h2b}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.services.desc}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((svc, i) => {
            const color = serviceColors[i]
            const c = colorMap[color]
            const Icon = serviceIcons[i]
            return (
              <div
                key={i}
                className={`animate-on-scroll animate-delay-${(i + 1) * 100} relative bg-white border-2 ${c.border} rounded-2xl p-6 card-hover shadow-sm hover:shadow-xl ${c.glow} flex flex-col`}
              >
                {svc.badge && (
                  <span className={`absolute -top-3 left-6 px-3 py-0.5 text-xs font-bold rounded-full ${c.badge}`}>
                    {svc.badge}
                  </span>
                )}

                <div className={`w-12 h-12 ${c.icon} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>

                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  {svc.subtitle}
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {svc.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {svc.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={15} className={`flex-shrink-0 ${c.check}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${c.btn} transition-colors mt-auto`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t.services.learnMore} <ArrowRight size={14} />
                </button>
              </div>
            )
          })}
        </div>

        <div className="animate-on-scroll mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-teal-50 border border-teal-100 rounded-2xl px-5 py-4">
            <div className="text-sm font-semibold text-dark-800">
              {t.services.seoYkCtaTitle}
            </div>
            <div className="text-sm text-gray-600">
              {t.services.seoYkCtaDesc}
            </div>
            <Link
              to="/jasa-seo-yogyakarta"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-colors shadow-sm shadow-teal-500/25 whitespace-nowrap"
            >
              {t.services.seoYkCtaBtn} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
