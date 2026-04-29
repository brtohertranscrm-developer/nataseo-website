import { useEffect, useRef } from 'react'
import { ArrowRight, Play, TrendingUp, Search, FileText, Code2 } from 'lucide-react'

const floatingCards = [
  { icon: TrendingUp, label: 'SEO Traffic', value: '+320%', color: 'text-teal-500', bg: 'bg-teal-50' },
  { icon: Search, label: 'Rank #1 Google', value: '50+ Keywords', color: 'text-gold-500', bg: 'bg-gold-50' },
  { icon: Code2, label: 'Projects Done', value: '200+', color: 'text-teal-500', bg: 'bg-teal-50' },
]

export default function Hero() {
  const statsRef = useRef([])

  useEffect(() => {
    const targets = [
      { el: document.getElementById('stat-1'), target: 200, suffix: '+' },
      { el: document.getElementById('stat-2'), target: 98, suffix: '%' },
      { el: document.getElementById('stat-3'), target: 5, suffix: '+' },
    ]
    targets.forEach(({ el, target, suffix }) => {
      if (!el) return
      let count = 0
      const step = target / 60
      const timer = setInterval(() => {
        count = Math.min(count + step, target)
        el.textContent = Math.floor(count) + suffix
        if (count >= target) clearInterval(timer)
      }, 25)
    })
  }, [])

  const scrollToServices = () =>
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-mesh"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-teal-400/5 rounded-full blur-2xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(10,181,160,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,181,160,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">Indonesia's #1 Digital Agency</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Grow Your Business{' '}
              <span className="text-gradient-teal">Digitally</span>{' '}
              with{' '}
              <span className="text-gradient-gold">NataSEO</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              We help businesses dominate search engines, build stunning websites,
              create compelling content, and develop powerful software solutions.
              Your digital success starts here.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/30 hover:shadow-teal-400/50 hover:scale-105"
              >
                Start Your Project
                <ArrowRight size={18} />
              </button>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <Play size={16} className="fill-white" />
                Explore Services
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-white" id="stat-1">0+</div>
                <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white" id="stat-2">0%</div>
                <div className="text-gray-400 text-sm mt-1">Client Satisfaction</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white" id="stat-3">0+</div>
                <div className="text-gray-400 text-sm mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right: Visual cards */}
          <div className="hidden lg:block relative">
            {/* Main card */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 ml-8">
              {/* Dashboard mockup */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-white/10 rounded-full h-5 ml-2" />
              </div>

              {/* Chart bars */}
              <div className="mb-6">
                <div className="text-white/60 text-xs mb-3 font-medium">ORGANIC TRAFFIC GROWTH</div>
                <div className="flex items-end gap-2 h-24">
                  {[30, 45, 38, 60, 55, 75, 68, 90, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm transition-all duration-500"
                      style={{
                        height: `${h}%`,
                        background: i >= 7
                          ? 'linear-gradient(to top, #0AB5A0, #5eead4)'
                          : 'rgba(255,255,255,0.15)',
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-teal-300 text-xs font-medium mb-1">Total Visitors</div>
                  <div className="text-white text-xl font-bold">48.2K</div>
                  <div className="text-green-400 text-xs mt-1">↑ +24.3%</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-gold-300 text-xs font-medium mb-1">Conversion Rate</div>
                  <div className="text-white text-xl font-bold">6.8%</div>
                  <div className="text-green-400 text-xs mt-1">↑ +12.1%</div>
                </div>
              </div>
            </div>

            {/* Floating badge cards */}
            {floatingCards.map((card, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-float"
                style={{
                  top: i === 0 ? '-20px' : i === 1 ? '40%' : 'auto',
                  bottom: i === 2 ? '-20px' : 'auto',
                  left: i === 1 ? '-40px' : 'auto',
                  right: i === 0 ? '20px' : i === 2 ? '30px' : 'auto',
                  animationDelay: `${i * 0.8}s`,
                  zIndex: 10,
                }}
              >
                <div className={`w-9 h-9 ${card.bg} rounded-xl flex items-center justify-center`}>
                  <card.icon size={18} className={card.color} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">{card.label}</div>
                  <div className="text-sm font-bold text-dark-800">{card.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
