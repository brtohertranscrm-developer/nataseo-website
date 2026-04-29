import { useEffect, useRef } from 'react'
import { Star, Rocket, Trophy, HeartHandshake, ArrowRight } from 'lucide-react'

const perks = [
  {
    icon: Trophy,
    title: 'Exclusive Launch Pricing',
    desc: "Our first clients get special introductory rates — a one-time offer we won't repeat.",
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Attention',
    desc: 'As an early client, you get direct, hands-on attention from our core team.',
  },
  {
    icon: Rocket,
    title: 'Real Results, Not Promises',
    desc: "We're hungry for achievement. Your success is the best portfolio we could ask for.",
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)

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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
            <span className="text-gold-600 text-sm font-semibold">Be the First</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            We're New, and We{' '}
            <span className="text-gradient-gold">Need You</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We don't have testimonials yet — because we're just getting started. Be our first client
            and unlock exclusive benefits that won't come around twice.
          </p>
        </div>

        {/* Hero CTA card */}
        <div className="animate-on-scroll relative bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl p-8 md:p-14 mb-12 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-gold-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-2xl mx-auto">
            {/* Stars placeholder */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="text-gold-400 fill-gold-400 opacity-30" />
              ))}
            </div>

            <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-4">
              Waiting for your stars
            </p>

            <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-4 leading-snug">
              "Your business name could be<br />
              <span className="text-teal-400">our very first success story."</span>
            </h3>

            <p className="text-gray-400 text-base mb-8">
              We're fully committed to delivering our best work — because our reputation
              starts with you. Reach out now and let's build something great together.
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-2xl transition-all duration-200 shadow-lg shadow-teal-500/30 hover:scale-105 text-base"
            >
              Become Our First Client
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Perks grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {perks.map((perk, i) => (
            <div
              key={i}
              className={`animate-on-scroll animate-delay-${(i + 1) * 100} bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-teal-100 transition-all`}
            >
              <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                <perk.icon size={22} className="text-teal-500" />
              </div>
              <h4 className="text-dark-800 font-bold text-base mb-2">{perk.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom nudge */}
        <div className="animate-on-scroll text-center mt-12">
          <p className="text-gray-400 text-sm">
            Free consultation · No obligations · Response within 24 hours
          </p>
        </div>

      </div>
    </section>
  )
}
