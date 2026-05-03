import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, TrendingUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import WhatsAppButton from '../components/WhatsAppButton'

const CANONICAL = 'https://nataseo.asia/jasa-seo-yogyakarta'

export default function JasaSEOYogyakarta() {
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en
  const c = t.seoYogyakartaPage

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDesc} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={c.seoTitle} />
        <meta property="og:description" content={c.seoDesc} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://nataseo.asia/og-image.webp" />
        <script type="application/ld+json">
          {JSON.stringify(c.jsonLd)}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-20 lg:pt-32 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-5" />
        <div className="absolute -top-10 right-0 w-[28rem] h-[28rem] bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] bg-gold-500/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            {t.article.backBtn}
          </Link>

          <Breadcrumb
            items={[
              { label: t.nav.home, href: '/' },
              { label: c.breadcrumb },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <MapPin size={16} />
                {c.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-dark-800 tracking-tight mb-5">
                {c.h1a}{' '}
                <span className="text-gradient-teal">{c.h1b}</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-7">
                {c.lead}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={c.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-all duration-200 shadow-md shadow-teal-500/30 hover:scale-105"
                >
                  {c.primaryCta.label} <ArrowRight size={18} />
                </a>
                <Link
                  to="/free-seo-audit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-teal-50 text-dark-800 hover:text-teal-700 font-bold rounded-xl border border-gray-200 hover:border-teal-200 transition-all duration-200"
                >
                  {c.secondaryCta} <TrendingUp size={18} />
                </Link>
              </div>

              <ul className="space-y-2.5">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="p-7 sm:p-8">
                <h2 className="text-xl font-extrabold text-dark-800 mb-2">
                  {c.card.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {c.card.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {c.card.points.map((p) => (
                    <div key={p.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                        {p.kicker}
                      </div>
                      <div className="text-base font-extrabold text-dark-800 mb-1">
                        {p.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {p.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-teal-50 border border-teal-100 rounded-2xl p-5">
                  <div className="text-sm font-bold text-dark-800 mb-1">{c.card.ctaTitle}</div>
                  <div className="text-sm text-gray-600 mb-4">{c.card.ctaDesc}</div>
                  <a
                    href={c.primaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-colors"
                  >
                    {c.card.ctaBtn} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className="grid lg:grid-cols-3 gap-6 mb-16">
            {c.problems.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{c.problemLabel}</div>
                <h3 className="text-lg font-extrabold text-dark-800 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </section>

          <section className="bg-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-700">
                {c.deliver.badge}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-800 mt-4">
                {c.deliver.h2}
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                {c.deliver.desc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.deliver.items.map((it) => (
                <div key={it.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{it.kicker}</div>
                  <div className="text-base font-extrabold text-dark-800 mb-2">{it.title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{it.desc}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

