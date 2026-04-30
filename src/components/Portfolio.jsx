import { useEffect, useRef } from 'react'
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

const colorMap = {
  blue: {
    badge: 'bg-blue-50 text-blue-600 border-blue-100',
    service: 'bg-blue-500',
    accent: 'text-blue-500',
    border: 'border-blue-100',
    check: 'text-blue-500',
    glow: 'from-blue-500/20 to-blue-600/5',
    mockupBg: 'from-blue-600 to-blue-800',
    mockupAccent: 'bg-blue-400/30',
  },
  teal: {
    badge: 'bg-teal-50 text-teal-600 border-teal-100',
    service: 'bg-teal-500',
    accent: 'text-teal-500',
    border: 'border-teal-100',
    check: 'text-teal-500',
    glow: 'from-teal-500/20 to-teal-600/5',
    mockupBg: 'from-teal-500 to-teal-700',
    mockupAccent: 'bg-teal-300/30',
  },
  rose: {
    badge: 'bg-rose-50 text-rose-600 border-rose-100',
    service: 'bg-rose-500',
    accent: 'text-rose-500',
    border: 'border-rose-100',
    check: 'text-rose-500',
    glow: 'from-rose-500/20 to-rose-600/5',
    mockupBg: 'from-rose-500 to-rose-700',
    mockupAccent: 'bg-rose-300/30',
  },
}

function MockupVisual({ color, client, url }) {
  const c = colorMap[color]
  return (
    <div className="relative">
      {/* Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} rounded-2xl blur-xl`} />

      {/* Browser frame */}
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Browser chrome */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400 truncate">
            {url.replace('https://', '')}
          </div>
        </div>

        {/* Website preview art */}
        <div className={`relative bg-gradient-to-br ${c.mockupBg} h-52 overflow-hidden`}>
          {/* Abstract layout blocks mimicking a real website */}
          <div className="absolute inset-0 p-5 flex flex-col gap-3">
            {/* Nav bar */}
            <div className="flex items-center justify-between">
              <div className="bg-white/30 rounded-md h-5 w-24" />
              <div className="flex gap-2">
                {[1,2,3].map(i => <div key={i} className="bg-white/20 rounded h-4 w-10" />)}
                <div className="bg-white/70 rounded-md h-6 w-16" />
              </div>
            </div>
            {/* Hero */}
            <div className="flex-1 flex flex-col justify-center gap-2">
              <div className="bg-white/40 rounded h-5 w-3/4" />
              <div className="bg-white/25 rounded h-3.5 w-1/2" />
              <div className="bg-white/20 rounded h-3 w-5/8 mt-1" />
              <div className="flex gap-2 mt-2">
                <div className="bg-white/80 rounded-lg h-8 w-28" />
                <div className="bg-white/20 border border-white/40 rounded-lg h-8 w-24" />
              </div>
            </div>
            {/* Cards row */}
            <div className="flex gap-2">
              {[1,2,3].map(i => (
                <div key={i} className={`flex-1 ${c.mockupAccent} rounded-xl h-12`} />
              ))}
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full" />
        </div>

        {/* Footer bar */}
        <div className="bg-gray-50 border-t border-gray-100 px-4 py-2 flex items-center justify-between">
          <div className="text-xs text-gray-400 font-medium">{client}</div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-xs font-semibold text-teal-500 hover:text-teal-600 transition-colors"
          >
            Live <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
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
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
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

        {/* Case studies */}
        <div className="space-y-16">
          {t.portfolio.cases.map((cs, i) => {
            const c = colorMap[cs.color]
            const isEven = i % 2 === 0

            return (
              <div
                key={i}
                className="animate-on-scroll grid lg:grid-cols-2 gap-10 items-center"
              >
                {/* Text side */}
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${c.badge}`}>
                      {cs.industry}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">
                      {cs.service}
                    </span>
                    <span className="text-gray-300 text-xs">#{i + 1}</span>
                  </div>

                  {/* Client name + tagline */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-dark-800 mb-2 leading-tight">
                    {cs.client}
                  </h3>
                  <p className={`text-base font-semibold mb-5 ${c.accent}`}>
                    "{cs.tagline}"
                  </p>

                  {/* Challenge */}
                  <div className="mb-4">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                      {t.portfolio.challengeLabel}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-5">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                      {t.portfolio.solutionLabel}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      {t.portfolio.resultLabel}
                    </div>
                    <ul className="space-y-2">
                      {cs.results.map((r, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <CheckCircle size={15} className={`flex-shrink-0 mt-0.5 ${c.check}`} />
                          <span className="text-sm text-gray-700">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack + live link */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex flex-wrap gap-2">
                      {cs.stack.map(s => (
                        <span key={s} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg">
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      href={cs.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-bold ${c.accent} hover:underline transition-colors`}
                    >
                      {t.portfolio.liveBtn} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Visual side */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <MockupVisual color={cs.color} client={cs.client} url={cs.url} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="animate-on-scroll mt-20 text-center">
          <p className="text-gray-500 text-sm mb-5">{t.portfolio.ctaDesc}</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-all duration-200 shadow-md shadow-teal-500/30 hover:scale-105"
          >
            {t.portfolio.cta}
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
