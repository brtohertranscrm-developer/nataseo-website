import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Search, Code2, FileText, Target, ArrowRight } from 'lucide-react'

const categories = ['All', 'Web Engine', 'SEO', 'Content', 'Software']

const services = [
  {
    category: 'SEO',
    tag: 'SEO',
    industry: 'E-Commerce',
    icon: Search,
    color: 'teal',
    title: 'SEO for Online Stores',
    description: "We research your best keywords, fix technical issues, and build your site's authority so your products show up when people search.",
    goal: 'Target: Page 1 Rankings',
  },
  {
    category: 'Web Engine',
    tag: 'Web Engine',
    industry: 'Any Industry',
    icon: TrendingUp,
    color: 'gold',
    title: 'High-Converting Websites',
    description: 'We design fast, mobile-first websites that look great and guide your visitors toward taking action — inquiry, purchase, or call.',
    goal: 'Target: More Conversions',
  },
  {
    category: 'Software',
    tag: 'Software',
    industry: 'Business & Enterprise',
    icon: Code2,
    color: 'teal',
    title: 'Custom Business Systems',
    description: 'We build web apps and internal tools tailored to your workflow — from simple dashboards to complex management systems.',
    goal: 'Target: Save Time & Cost',
  },
  {
    category: 'Content',
    tag: 'Content',
    industry: 'All Sectors',
    icon: FileText,
    color: 'gold',
    title: 'SEO Content Strategy',
    description: 'We write articles, landing pages, and product copy that rank on Google and speak directly to your ideal customer.',
    goal: 'Target: Organic Inbound Leads',
  },
  {
    category: 'Web Engine',
    tag: 'Web Engine',
    industry: 'Property & F&B',
    icon: TrendingUp,
    color: 'gold',
    title: 'Business Portals & Catalogs',
    description: 'Need a listing portal, booking system, or product catalog? We build feature-rich platforms built around your business model.',
    goal: 'Target: Better User Experience',
  },
  {
    category: 'SEO',
    tag: 'SEO',
    industry: 'Local Business',
    icon: Search,
    color: 'teal',
    title: 'Local SEO',
    description: 'We help your business appear in Google Maps and "near me" searches so local customers can find you before they find your competitors.',
    goal: 'Target: Local Visibility',
  },
]

const colorMap = {
  teal: {
    bg: 'bg-teal-50',
    icon: 'text-teal-500',
    badge: 'bg-teal-100 text-teal-700',
    goal: 'text-teal-600 bg-teal-50',
  },
  gold: {
    bg: 'bg-gold-50',
    icon: 'text-gold-500',
    badge: 'bg-gold-100 text-gold-700',
    goal: 'text-gold-600 bg-gold-50',
  },
}

export default function Portfolio() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? services : services.filter(p => p.category === active)

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
            <span className="text-teal-600 text-sm font-semibold">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            What We're Built{' '}
            <span className="text-gradient-teal">to Deliver</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We may be new, but we know exactly what it takes to grow a business online.
            Here's a look at what we bring to the table — for you.
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
                {/* Card top */}
                <div className={`h-40 ${c.bg} flex items-center justify-center relative overflow-hidden`}>
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    <p.icon size={28} className={c.icon} />
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-dark-800 text-xs font-bold rounded-full">
                    {p.industry}
                  </span>
                  <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${c.badge}`}>
                    {p.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark-800 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold ${c.goal}`}>
                    <Target size={14} />
                    {p.goal}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="animate-on-scroll text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Have a specific project in mind? Let's talk about what we can build for you.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-md shadow-teal-500/30 hover:scale-105"
          >
            Discuss Your Project
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
