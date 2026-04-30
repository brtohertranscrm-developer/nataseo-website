import { useEffect, useRef, useState } from 'react'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

export default function FAQ() {
  const sectionRef = useRef(null)
  const [open, setOpen] = useState(null)
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const toggle = i => setOpen(prev => (prev === i ? null : i))

  // FAQ schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <section id="faq" className="section-padding bg-white" ref={sectionRef}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
            <span className="text-gold-600 text-sm font-semibold">{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            {t.faq.h2a}{' '}
            <span className="text-gradient-gold">{t.faq.h2b}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t.faq.desc}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-14">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`animate-on-scroll border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-gold-200 shadow-md shadow-gold-500/5'
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-semibold text-base leading-snug transition-colors ${
                    isOpen ? 'text-dark-800' : 'text-dark-800'
                  }`}>
                    {item.q}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isOpen
                      ? 'bg-gold-500 text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {isOpen
                      ? <Minus size={14} />
                      : <Plus size={14} />
                    }
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="animate-on-scroll bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="relative">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">
              {t.faq.stillQuestion}
            </p>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">
              {t.faq.stillDesc}
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-gold-500/30 hover:scale-105 text-sm"
            >
              {t.faq.stillBtn}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
