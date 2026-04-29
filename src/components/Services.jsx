import { useRef, useEffect } from 'react'
import { Globe, Search, FileText, Code2, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Engine',
    subtitle: 'High-Performance Websites',
    color: 'teal',
    description:
      'We build fast, responsive, and visually stunning websites that convert visitors into customers. From landing pages to complex web applications.',
    features: [
      'Custom UI/UX Design',
      'Mobile-First Development',
      'Speed & Performance Optimized',
      'CMS Integration',
    ],
    badge: 'Most Popular',
  },
  {
    icon: Search,
    title: 'SEO',
    subtitle: 'Search Engine Optimization',
    color: 'gold',
    description:
      'Dominate Google search results with our data-driven SEO strategies. We get your business found by the right people at the right time.',
    features: [
      'Technical SEO Audit',
      'On-Page Optimization',
      'Link Building',
      'Local SEO & Google Maps',
    ],
    badge: null,
  },
  {
    icon: FileText,
    title: 'Content Writing',
    subtitle: 'Compelling Content Strategy',
    color: 'teal',
    description:
      'Engage your audience with high-quality, SEO-optimized content that ranks on search engines and resonates with your target market.',
    features: [
      'Blog & Article Writing',
      'Website Copywriting',
      'Social Media Content',
      'Product Descriptions',
    ],
    badge: null,
  },
  {
    icon: Code2,
    title: 'Software Solution',
    subtitle: 'Custom Software Development',
    color: 'gold',
    description:
      'From web apps to mobile apps and enterprise software, we build tailored digital solutions that streamline your business operations.',
    features: [
      'Web Application Development',
      'Mobile App (iOS & Android)',
      'API Integration',
      'Cloud & DevOps Solutions',
    ],
    badge: null,
  },
]

const colorMap = {
  teal: {
    icon: 'bg-teal-50 text-teal-500',
    badge: 'bg-teal-500 text-white',
    border: 'border-teal-100 hover:border-teal-300',
    check: 'text-teal-500',
    btn: 'text-teal-600 hover:text-teal-700',
    glow: 'hover:shadow-teal-100',
  },
  gold: {
    icon: 'bg-gold-50 text-gold-500',
    badge: 'bg-gold-500 text-white',
    border: 'border-gold-100 hover:border-gold-300',
    check: 'text-gold-500',
    btn: 'text-gold-600 hover:text-gold-700',
    glow: 'hover:shadow-gold-100',
  },
}

export default function Services() {
  const sectionRef = useRef(null)

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
    <section id="services" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span className="text-teal-600 text-sm font-semibold">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            Services That Drive{' '}
            <span className="text-gradient-teal">Real Results</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We combine strategy, creativity, and technology to deliver digital solutions
            that grow your business and outperform the competition.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const c = colorMap[svc.color]
            return (
              <div
                key={i}
                className={`animate-on-scroll animate-delay-${(i + 1) * 100} relative bg-white border-2 ${c.border} rounded-2xl p-6 card-hover shadow-sm hover:shadow-xl ${c.glow} flex flex-col`}
              >
                {svc.badge && (
                  <span className={`absolute -top-3 left-6 px-3 py-0.5 text-xs font-bold rounded-full ${c.badge}`}>
                    {svc.badge}
                  </span>
                )}

                <div className={`w-12 h-12 ${c.icon} rounded-2xl flex items-center justify-center mb-4`}>
                  <svc.icon size={24} />
                </div>

                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  {svc.subtitle}
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {svc.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {svc.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={15} className={`flex-shrink-0 ${c.check}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${c.btn} transition-colors mt-auto`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
