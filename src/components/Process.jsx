import { useEffect, useRef } from 'react'
import { MessageCircle, Lightbulb, Rocket, BarChart3 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

const stepIcons = [MessageCircle, Lightbulb, Rocket, BarChart3]
const stepColors = ['teal', 'gold', 'teal', 'gold']

export default function Process() {
  const sectionRef = useRef(null)
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150)
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
    <section id="process" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
            <span className="text-gold-600 text-sm font-semibold">{t.process.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            {t.process.h2a}{' '}
            <span className="text-gradient-gold">{t.process.h2b}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.process.desc}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal-200 via-gold-200 to-teal-200" />

          {t.process.steps.map((s, i) => {
            const Icon = stepIcons[i]
            const color = stepColors[i]
            return (
              <div
                key={i}
                className={`animate-on-scroll animate-delay-${(i + 1) * 100} relative flex flex-col items-center text-center`}
              >
                <div
                  className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${
                    color === 'teal'
                      ? 'bg-teal-500 shadow-teal-500/30'
                      : 'bg-gold-500 shadow-gold-500/30'
                  }`}
                >
                  <Icon size={28} className="text-white" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-extrabold flex items-center justify-center text-white bg-dark-800">
                    {i + 1}
                  </span>
                </div>

                <div
                  className={`text-5xl font-extrabold mb-3 ${
                    color === 'teal' ? 'text-teal-50' : 'text-gold-50'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-16 animate-on-scroll bg-gradient-to-r from-dark-800 to-dark-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              {t.process.ctaTitle}
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              {t.process.ctaDesc}
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/30 hover:scale-105"
            >
              {t.process.ctaBtn} →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
