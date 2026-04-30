import { useEffect, useRef } from 'react'
import { ArrowRight, Play, TrendingUp, Search, Code2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

const floatingIcons = [TrendingUp, Search, Code2]
const floatingColors = [
  { color: 'text-teal-500', bg: 'bg-teal-50' },
  { color: 'text-gold-500', bg: 'bg-gold-50' },
  { color: 'text-teal-500', bg: 'bg-teal-50' },
]

function NodeCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const NODE_COUNT = 60
    const MAX_DIST = 150
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(10,181,160,0.7)'
        ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(10,181,160,${0.15 * (1 - dist / MAX_DIST)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.5 }}
    />
  )
}

export default function Hero() {
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en

  useEffect(() => {
    const targets = [
      { el: document.getElementById('stat-1'), target: 4, suffix: '' },
      { el: document.getElementById('stat-2'), target: 100, suffix: '%' },
      { el: document.getElementById('stat-3'), target: 24, suffix: 'h' },
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
      <NodeCanvas />

      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-teal-400/5 rounded-full blur-2xl" />

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
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {t.hero.h1a}{' '}
              <span className="text-gradient-teal">{t.hero.h1b}</span>{' '}
              {t.hero.h1c}{' '}
              <span className="text-gradient-gold">NataSEO</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/30 hover:shadow-teal-400/50 hover:scale-105"
              >
                {t.hero.cta1}
                <ArrowRight size={18} />
              </button>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <Play size={16} className="fill-white" />
                {t.hero.cta2}
              </button>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-white" id="stat-1">0</div>
                <div className="text-gray-400 text-sm mt-1">{t.hero.stat1}</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white" id="stat-2">0%</div>
                <div className="text-gray-400 text-sm mt-1">{t.hero.stat2}</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white" id="stat-3">0h</div>
                <div className="text-gray-400 text-sm mt-1">{t.hero.stat3}</div>
              </div>
            </div>
          </div>

          {/* Right: Visual cards */}
          <div className="hidden lg:block relative">
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 ml-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-white/10 rounded-full h-5 ml-2" />
              </div>

              <div className="mb-6">
                <div className="text-white/60 text-xs mb-3 font-medium">{t.hero.cardTraffic.toUpperCase()}</div>
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
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-teal-300 text-xs font-medium mb-1">{t.hero.cardVisitors}</div>
                  <div className="text-white text-xl font-bold">48.2K</div>
                  <div className="text-green-400 text-xs mt-1">↑ +24.3%</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-gold-300 text-xs font-medium mb-1">{t.hero.cardConversion}</div>
                  <div className="text-white text-xl font-bold">6.8%</div>
                  <div className="text-green-400 text-xs mt-1">↑ +12.1%</div>
                </div>
              </div>
            </div>

            {/* Floating badge cards */}
            {t.hero.floatingCards.map((card, i) => {
              const Icon = floatingIcons[i]
              const c = floatingColors[i]
              return (
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
                  <div className={`w-9 h-9 ${c.bg} rounded-xl flex items-center justify-center`}>
                    <Icon size={18} className={c.color} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">{card.label}</div>
                    <div className="text-sm font-bold text-dark-800">{card.value}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
