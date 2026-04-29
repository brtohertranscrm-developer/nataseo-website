import { useEffect, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmad Fauzi',
    role: 'CEO, TokoFashion.id',
    avatar: 'AF',
    color: 'bg-teal-500',
    rating: 5,
    text: "NataSEO completely transformed our online presence. In just 4 months, our organic traffic grew by 450% and we're now ranking #1 for our most competitive keywords. Best investment we've ever made.",
    service: 'SEO',
  },
  {
    name: 'Siti Rahayu',
    role: 'Founder, Klinik Sehat Group',
    avatar: 'SR',
    color: 'bg-gold-500',
    rating: 5,
    text: "We needed someone who understands local SEO for healthcare, and NataSEO delivered. All 8 of our clinic locations now appear in the local pack. Patient inquiries have tripled.",
    service: 'SEO',
  },
  {
    name: 'Budi Santoso',
    role: 'Director, PropNesia',
    avatar: 'BS',
    color: 'bg-teal-600',
    rating: 5,
    text: "The property portal they built for us is stunning and functional. The UX is smooth, the search works perfectly, and inquiries went up 40% in the first month alone.",
    service: 'Web Engine',
  },
  {
    name: 'Dewi Lestari',
    role: 'Marketing Head, FinEasy',
    avatar: 'DL',
    color: 'bg-gold-600',
    rating: 5,
    text: "100 articles in 3 months, all perfectly SEO-optimized and genuinely helpful for our audience. Our blog is now our #1 source of inbound leads. Incredible content team.",
    service: 'Content Writing',
  },
  {
    name: 'Reza Pratama',
    role: 'Operations Director, ManajemenKu',
    avatar: 'RP',
    color: 'bg-teal-500',
    rating: 5,
    text: "The HR system they built handles our 500+ employees effortlessly. What used to take 3 days of manual work now takes 2 hours. The ROI was immediate.",
    service: 'Software Solution',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

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

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
            <span className="text-gold-600 text-sm font-semibold">Client Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            What Our Clients{' '}
            <span className="text-gradient-gold">Say About Us</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Don't take our word for it — hear directly from the businesses we've helped grow.
          </p>
        </div>

        {/* Main testimonial (featured) */}
        <div className="animate-on-scroll relative bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl p-8 md:p-12 mb-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-3xl mx-auto text-center">
            <Quote size={40} className="text-teal-400/40 mx-auto mb-6" />

            <div className="mb-4">
              <StarRating count={t.rating} />
              <div className="flex justify-center mt-2" />
            </div>

            <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
              "{t.text}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                {t.avatar}
              </div>
              <div className="text-left">
                <div className="text-white font-bold">{t.name}</div>
                <div className="text-gray-400 text-sm">{t.role}</div>
              </div>
              <div className="ml-4 px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-300 text-xs font-medium">
                {t.service}
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mb-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-teal-500' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* All reviews mini cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((t, i) => (
            <div
              key={i}
              className={`animate-on-scroll animate-delay-${(i + 1) * 100} bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-dark-800 font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
              <StarRating count={t.rating} />
              <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-3">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
