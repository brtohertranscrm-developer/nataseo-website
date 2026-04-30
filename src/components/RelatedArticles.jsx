import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

const ALL_ARTICLES = [
  { slug: '/artikel/jasa-seo-yogyakarta', title: 'Jasa SEO Yogyakarta: Cara Tingkatkan Ranking Google Bisnis Anda', tag: 'SEO' },
  { slug: '/artikel/jasa-pembuatan-website-yogyakarta', title: 'Jasa Pembuatan Website Yogyakarta: Website Profesional untuk Bisnis', tag: 'Web' },
  { slug: '/artikel/strategi-content-marketing-bisnis-indonesia', title: 'Strategi Content Marketing yang Efektif untuk Bisnis di Indonesia', tag: 'Content' },
  { slug: '/artikel/jasa-software-development-yogyakarta', title: 'Jasa Software Development Yogyakarta: Solusi Sistem Custom', tag: 'Software' },
  { slug: '/artikel/cara-daftar-google-business-profile', title: 'Cara Daftar Google Business Profile untuk Bisnis Lokal Indonesia', tag: 'SEO Lokal' },
  { slug: '/artikel/seo-vs-google-ads', title: 'SEO vs Google Ads: Mana yang Lebih Baik untuk Bisnis Anda?', tag: 'SEO' },
  { slug: '/artikel/biaya-jasa-seo-indonesia', title: 'Berapa Biaya Jasa SEO di Indonesia? Panduan Harga 2026', tag: 'SEO' },
]

const TAG_COLORS = {
  'SEO':     'bg-teal-50 text-teal-600',
  'SEO Lokal': 'bg-teal-50 text-teal-600',
  'Web':     'bg-gold-50 text-gold-600',
  'Content': 'bg-purple-50 text-purple-600',
  'Software':'bg-blue-50 text-blue-600',
}

export default function RelatedArticles({ currentSlug }) {
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en
  const currentTag = ALL_ARTICLES.find(a => a.slug === currentSlug)?.tag
  const others = ALL_ARTICLES.filter(a => a.slug !== currentSlug)

  // Prioritize same-tag articles, then fill up to 3
  const sameTag = others.filter(a => a.tag === currentTag)
  const different = others.filter(a => a.tag !== currentTag)
  const related = [...sameTag, ...different].slice(0, 3)

  return (
    <div className="mt-12 pt-10 border-t border-gray-100">
      <h3 className="text-lg font-bold text-dark-800 mb-5">{t.related.title}</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {related.map(article => (
          <Link
            key={article.slug}
            to={article.slug}
            onClick={() => window.scrollTo(0, 0)}
            className="text-left p-4 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-200 group"
          >
            <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${TAG_COLORS[article.tag] || 'bg-gray-100 text-gray-600'}`}>
              {article.tag}
            </span>
            <p className="text-sm font-medium text-dark-800 leading-snug group-hover:text-teal-600 transition-colors">
              {article.title}
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-teal-500 mt-2 font-medium">
              {t.related.readMore} <ArrowRight size={11} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
