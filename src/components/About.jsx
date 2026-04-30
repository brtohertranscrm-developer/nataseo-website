import { useEffect, useRef } from 'react'
import { Award, Users, Target, TrendingUp, CheckCircle } from 'lucide-react'
import profileImg from '../assets/profile.webp'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

const statIcons = [Award, Users, Target, TrendingUp]

export default function About() {
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
    <section id="about" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-dark-800">
              <img
                src={profileImg}
                alt="Pandu Pradana — Founder NataSEO Yogyakarta"
                width={600}
                height={804}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/90 to-transparent px-6 py-5">
                <div className="text-white font-bold text-lg leading-tight">Pandu Pradana</div>
                <div className="text-teal-400 text-sm font-medium">Founder, NataSEO</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-extrabold">NEW</span>
              </div>
              <div>
                <div className="text-dark-800 font-bold text-sm">Just</div>
                <div className="text-teal-500 font-bold">Launched 🚀</div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold-500/10 border-2 border-gold-300/30 rounded-2xl" />
          </div>

          {/* Right: Text */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
              <span className="text-teal-600 text-sm font-semibold">{t.about.badge}</span>
            </div>

            <h2 className="animate-on-scroll text-3xl sm:text-4xl font-extrabold text-dark-800 mb-5 leading-tight">
              {t.about.h2a}{' '}
              <span className="text-gradient-teal">{t.about.h2b}</span>
            </h2>

            <p className="animate-on-scroll text-gray-500 leading-relaxed mb-6">
              {t.about.p1}
            </p>
            <p className="animate-on-scroll text-gray-500 leading-relaxed mb-8">
              {t.about.p2}
            </p>

            <ul className="animate-on-scroll space-y-3 mb-10">
              {t.about.strengths.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="animate-on-scroll inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-md shadow-teal-500/30 hover:scale-105"
            >
              {t.about.cta}
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {t.about.stats.map((h, i) => {
            const Icon = statIcons[i]
            return (
              <div
                key={i}
                className={`animate-on-scroll animate-delay-${(i + 1) * 100} bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100`}
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-teal-500" />
                </div>
                <div className="text-2xl font-extrabold text-dark-800 mb-1">{h.value}</div>
                <div className="text-gray-500 text-sm">{h.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
