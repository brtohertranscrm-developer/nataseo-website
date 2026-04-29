import { useEffect, useRef, useState } from 'react'
import { ExternalLink, TrendingUp, Search, Code2, FileText } from 'lucide-react'

const categories = ['All', 'Web Engine', 'SEO', 'Content', 'Software']

const projects = [
  {
    category: 'SEO',
    tag: 'SEO',
    title: 'E-Commerce Fashion Brand',
    description: 'Took a fashion e-commerce from page 5 to #1 ranking for 30+ competitive keywords in 4 months.',
    result: '+450% Organic Traffic',
    icon: Search,
    color: 'teal',
    industry: 'E-Commerce',
  },
  {
    category: 'Web Engine',
    tag: 'Web Engine',
    title: 'Restaurant Chain Website',
    description: 'Redesigned and rebuilt a multi-location restaurant website with online ordering and reservation system.',
    result: '3x More Bookings',
    icon: TrendingUp,
    color: 'gold',
    industry: 'F&B',
  },
  {
    category: 'Software',
    tag: 'Software',
    title: 'HR Management System',
    description: 'Custom-built HR platform handling payroll, attendance, and performance tracking for 500+ employees.',
    result: '60% Faster HR Ops',
    icon: Code2,
    color: 'teal',
    industry: 'Enterprise',
  },
  {
    category: 'Content',
    tag: 'Content',
    title: 'FinTech Content Strategy',
    description: 'Developed 100+ SEO articles for a fintech startup that doubled their inbound leads in 6 months.',
    result: '2x Inbound Leads',
    icon: FileText,
    color: 'gold',
    industry: 'FinTech',
  },
  {
    category: 'Web Engine',
    tag: 'Web Engine',
    title: 'Property Agency Portal',
    description: 'Built a full real-estate listing portal with search, filter, virtual tour integration, and CRM.',
    result: '40% More Inquiries',
    icon: TrendingUp,
    color: 'gold',
    industry: 'Property',
  },
  {
    category: 'SEO',
    tag: 'SEO',
    title: 'Healthcare Clinic Network',
    description: 'Local SEO strategy for 8 clinic locations, dominating "near me" searches across 3 cities.',
    result: '#1 Local Pack',
    icon: Search,
    color: 'teal',
    industry: 'Healthcare',
  },
]

const colorMap = {
  teal: {
    bg: 'bg-teal-50',
    icon: 'text-teal-500',
    badge: 'bg-teal-100 text-teal-700',
    result: 'text-teal-600 bg-teal-50',
  },
  gold: {
    bg: 'bg-gold-50',
    icon: 'text-gold-500',
    badge: 'bg-gold-100 text-gold-700',
    result: 'text-gold-600 bg-gold-50',
  },
}

export default function Portfolio() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

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
    <section id="portfolio" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span className="text-teal-600 text-sm font-semibold">Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            Results We've{' '}
            <span className="text-gradient-teal">Delivered</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real projects. Real clients. Real growth. Here's a glimpse at what
            we've achieved for businesses like yours.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/30'
                  : 'bg-white text-gray-600 hover:text-teal-600 border border-gray-200 hover:border-teal-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => {
            const c = colorMap[p.color]
            return (
              <div
                key={i}
                className="animate-on-scroll bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Card top image area */}
                <div className={`h-40 ${c.bg} flex items-center justify-center relative overflow-hidden`}>
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    <p.icon size={28} className={c.icon} />
                  </div>
                  {/* Industry tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-dark-800 text-xs font-bold rounded-full">
                    {p.industry}
                  </span>
                  {/* Category tag */}
                  <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${c.badge}`}>
                    {p.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark-800 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
                  {/* Result badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold ${c.result}`}>
                    <TrendingUp size={14} />
                    {p.result}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
