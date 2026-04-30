import { useEffect, useRef } from 'react'
import { ArrowRight, ShieldCheck, Users, BarChart3, Zap, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

const pillarIcons = [Users, ShieldCheck, BarChart3, Zap]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
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
    <section id="testimonials" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span className="text-teal-600 text-sm font-semibold">{t.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            {t.whyUs.h2a}{' '}
            <span className="text-gradient-teal">{t.whyUs.h2b}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.whyUs.desc}
          </p>
        </div>

        {/* Commitment card */}
        <div className="animate-on-scroll relative bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl p-8 md:p-14 mb-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-gold-500/10 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
                {t.whyUs.cardLabel}
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-4 leading-snug">
                {t.whyUs.cardTitle}{' '}
                <span className="text-teal-400">{t.whyUs.cardTitleAccent}</span>
              </h3>
              <p className="text-gray-400 text-base mb-8">
                {t.whyUs.cardDesc}
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-2xl transition-all duration-200 shadow-lg shadow-teal-500/30 hover:scale-105 text-base"
              >
                {t.whyUs.cardCta}
                <ArrowRight size={18} />
              </button>
            </div>

            <ul className="space-y-3">
              {t.whyUs.commitments.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.pillars.map((p, i) => {
            const Icon = pillarIcons[i]
            return (
              <div
                key={i}
                className={`animate-on-scroll animate-delay-${(i + 1) * 100} bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-teal-100 transition-all`}
              >
                <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-teal-500" />
                </div>
                <h4 className="text-dark-800 font-bold text-base mb-2">{p.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom nudge */}
        <div className="animate-on-scroll text-center mt-12">
          <p className="text-gray-400 text-sm">
            {t.whyUs.nudge}
          </p>
        </div>

      </div>
    </section>
  )
}
