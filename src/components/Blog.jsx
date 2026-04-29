import { useEffect, useRef } from 'react'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const articles = [
  {
    slug: '/artikel/jasa-seo-yogyakarta',
    tag: 'SEO',
    readTime: '5 min read',
    title: 'Jasa SEO Yogyakarta: Cara Tingkatkan Ranking Google Bisnis Anda',
    excerpt: 'Pelajari bagaimana strategi SEO yang tepat bisa membawa bisnis Anda ke halaman pertama Google dan mendatangkan pelanggan baru secara organik.',
    color: 'teal',
  },
  {
    slug: '/artikel/jasa-pembuatan-website-yogyakarta',
    tag: 'Web Engine',
    readTime: '4 min read',
    title: 'Pentingnya Website Profesional untuk Bisnis di Era Digital',
    excerpt: 'Website bukan sekadar brosur online. Temukan mengapa website profesional adalah investasi terpenting untuk pertumbuhan bisnis Anda.',
    color: 'gold',
  },
  {
    slug: '/artikel/strategi-content-marketing-bisnis-indonesia',
    tag: 'Content',
    readTime: '6 min read',
    title: 'Strategi Content Marketing yang Efektif untuk Bisnis di Indonesia',
    excerpt: 'Konten yang tepat bisa menjadi mesin penghasil pelanggan terbaik. Pelajari strategi yang terbukti meningkatkan traffic organik.',
    color: 'teal',
  },
  {
    slug: '/artikel/jasa-software-development-yogyakarta',
    tag: 'Software',
    readTime: '5 min read',
    title: 'Jasa Software Development Yogyakarta: Solusi Sistem Custom untuk Bisnis',
    excerpt: 'Proses bisnis yang manual menghambat pertumbuhan. Pelajari kapan bisnis Anda butuh software custom dan bagaimana prosesnya.',
    color: 'gold',
  },
  {
    slug: '/artikel/cara-daftar-google-business-profile',
    tag: 'SEO Lokal',
    readTime: '4 min read',
    title: 'Cara Daftar Google Business Profile untuk Bisnis Lokal Indonesia',
    excerpt: 'Google Business Profile adalah tool SEO lokal paling powerful dan sepenuhnya gratis. Panduan lengkap cara daftar dan optimasinya.',
    color: 'teal',
  },
  {
    slug: '/artikel/seo-vs-google-ads',
    tag: 'SEO',
    readTime: '5 min read',
    title: 'SEO vs Google Ads: Mana yang Lebih Baik untuk Bisnis Anda?',
    excerpt: 'SEO atau Google Ads? Pahami perbedaan, kelebihan, dan kapan harus menggunakan masing-masing untuk hasil terbaik.',
    color: 'gold',
  },
  {
    slug: '/artikel/biaya-jasa-seo-indonesia',
    tag: 'SEO',
    readTime: '5 min read',
    title: 'Berapa Biaya Jasa SEO di Indonesia? Panduan Harga 2026',
    excerpt: 'Harga jasa SEO sangat bervariasi. Pahami faktor yang mempengaruhi biaya dan kisaran harga yang wajar agar tidak salah pilih.',
    color: 'teal',
  },
]

const colorMap = {
  teal: { badge: 'bg-teal-50 text-teal-600', border: 'hover:border-teal-200' },
  gold: { badge: 'bg-gold-50 text-gold-600', border: 'hover:border-gold-200' },
}

export default function Blog() {
  const sectionRef = useRef(null)
  const navigate = useNavigate()

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
    <section id="blog" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span className="text-teal-600 text-sm font-semibold">Tips & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            Artikel & <span className="text-gradient-teal">Panduan Digital</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Tips SEO, web, dan content marketing gratis untuk membantu bisnis Anda tumbuh secara online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => {
            const c = colorMap[a.color]
            return (
              <article
                key={i}
                onClick={() => navigate(a.slug)}
                className={`animate-on-scroll bg-white border border-gray-100 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${c.border}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${c.badge}`}>
                    <Tag size={11} />
                    {a.tag}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <Clock size={11} />
                    {a.readTime}
                  </span>
                </div>
                <h3 className="text-dark-800 font-bold text-base leading-snug mb-3 line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                  {a.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-teal-500 text-sm font-semibold group">
                  Baca Selengkapnya
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
