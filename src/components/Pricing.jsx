import { useEffect, useRef } from 'react'
import { Globe, Search, FileText, Code2, CheckCircle, ArrowRight, Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

const serviceIcons = [Globe, Search, FileText, Code2]
const serviceColors = ['teal', 'teal', 'gold', 'gold']

const colorMap = {
  teal: {
    icon: 'bg-teal-50 text-teal-500',
    border: 'border-teal-100',
    price: 'text-teal-600',
    check: 'text-teal-500',
    unit: 'text-teal-400',
  },
  gold: {
    icon: 'bg-gold-50 text-gold-500',
    border: 'border-gold-100',
    price: 'text-gold-600',
    check: 'text-gold-500',
    unit: 'text-gold-400',
  },
}

export default function Pricing() {
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
    <section id="pricing" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span className="text-teal-600 text-sm font-semibold">{t.pricing.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            {t.pricing.h2a}{' '}
            <span className="text-gradient-teal">{t.pricing.h2b}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.pricing.desc}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {t.pricing.services.map((svc, i) => {
            const Icon = serviceIcons[i]
            const color = serviceColors[i]
            const c = colorMap[color]
            const isHighlight = svc.highlight

            return (
              <div
                key={i}
                className={`animate-on-scroll animate-delay-${(i + 1) * 100} relative flex flex-col rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  isHighlight
                    ? 'bg-dark-800 border-teal-500 shadow-xl shadow-teal-500/20'
                    : `bg-white ${c.border} shadow-sm hover:shadow-lg`
                }`}
              >
                {/* Most popular badge */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                      <Star size={11} className="fill-white" />
                      {lang === 'id' ? 'Paling Diminati' : 'Most Popular'}
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + name */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isHighlight ? 'bg-teal-500/20' : c.icon
                    }`}>
                      <Icon size={22} className={isHighlight ? 'text-teal-400' : ''} />
                    </div>
                    <div>
                      <div className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${
                        isHighlight ? 'text-teal-400' : 'text-gray-400'
                      }`}>
                        {svc.tagline}
                      </div>
                      <div className={`font-bold text-base ${isHighlight ? 'text-white' : 'text-dark-800'}`}>
                        {svc.name}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-1">
                    <div className={`text-xs font-medium mb-1 ${isHighlight ? 'text-gray-400' : 'text-gray-400'}`}>
                      {t.pricing.startingFrom}
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-2xl font-extrabold ${isHighlight ? 'text-teal-400' : c.price}`}>
                        {svc.startPrice}
                      </span>
                      <span className={`text-sm font-medium ${isHighlight ? 'text-gray-400' : 'text-gray-400'}`}>
                        {svc.unit}
                      </span>
                    </div>
                    <div className={`text-xs mt-1 ${isHighlight ? 'text-gray-500' : 'text-gray-400'}`}>
                      {svc.range}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={`my-5 border-t ${isHighlight ? 'border-white/10' : 'border-gray-100'}`} />

                  {/* Features */}
                  <ul className="space-y-2.5 flex-1 mb-5">
                    {svc.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle
                          size={15}
                          className={`flex-shrink-0 mt-0.5 ${isHighlight ? 'text-teal-400' : c.check}`}
                        />
                        <span className={`text-xs leading-relaxed ${isHighlight ? 'text-gray-300' : 'text-gray-600'}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  <p className={`text-xs leading-relaxed mb-5 italic ${isHighlight ? 'text-gray-500' : 'text-gray-400'}`}>
                    * {svc.note}
                  </p>

                  {/* CTA */}
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                      isHighlight
                        ? 'bg-teal-500 hover:bg-teal-400 text-white shadow-lg shadow-teal-500/30 hover:scale-[1.02]'
                        : 'bg-gray-50 hover:bg-teal-50 text-dark-800 hover:text-teal-600 border border-gray-200 hover:border-teal-200'
                    }`}
                  >
                    {lang === 'id' ? 'Konsultasi Gratis' : 'Free Consultation'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA banner */}
        <div className="animate-on-scroll bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <p className="text-dark-800 font-bold text-base mb-1">{t.pricing.ctaLabel}</p>
            <p className="text-gray-500 text-sm">{t.pricing.ctaDesc}</p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-all duration-200 shadow-md shadow-teal-500/30 hover:scale-105 text-sm whitespace-nowrap"
          >
            {t.pricing.ctaBtn}
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
