import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle, ChevronDown, ExternalLink, MapPin, TrendingUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import WhatsAppButton from '../components/WhatsAppButton'

export default function LocalSEOMoneyPage({ pageKey, canonicalUrl, canonicalPath }) {
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en
  const c = t[pageKey]

  const [faqOpen, setFaqOpen] = useState(0)
  const [formStatus, setFormStatus] = useState('idle') // idle | sending | sent
  const [form, setForm] = useState({ url: '', niche: '', whatsapp: '' })

  const faqJsonLd = c?.faq?.items?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: c.faq.items.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      }
    : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!c?.leadForm) return
    if (!form.url || !form.whatsapp) return
    setFormStatus('sending')
    try {
      await fetch('https://formspree.io/f/maqvwvlz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: 'Lead dari Money Page',
          phone: form.whatsapp,
          email: 'Tidak diisi (Lead dari Money Page)',
          service: c?.breadcrumb || pageKey,
          message: `URL: ${form.url}\nNiche: ${form.niche || '-'}\nPermintaan: audit cepat + konsultasi.`,
        }),
      })
      setFormStatus('sent')
    } catch {
      setFormStatus('sent')
    }
  }

  if (!c) return null

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={c.seoTitle} />
        <meta property="og:description" content={c.seoDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://nataseo.asia/og-image.webp" />
        <script type="application/ld+json">{JSON.stringify(c.jsonLd)}</script>
        {faqJsonLd && (
          <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        )}
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
              { label: c.breadcrumb, href: canonicalPath },
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

          {c.proof && (
            <section className="mt-16">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                  {c.proof.badge}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-800 mt-4">{c.proof.h2}</h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{c.proof.desc}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {c.proof.items.map((it) => (
                  <div key={it.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="text-base font-extrabold text-dark-800 mb-2">{it.title}</div>
                    <div className="text-sm text-gray-600 leading-relaxed">{it.desc}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {c.pricing && (
            <section className="mt-16">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                  {c.pricing.badge}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-800 mt-4">{c.pricing.h2}</h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{c.pricing.desc}</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {c.pricing.plans.map((p) => (
                  <div
                    key={p.name}
                    className={`rounded-3xl border-2 p-7 bg-white shadow-sm ${p.highlight ? 'border-teal-400 shadow-teal-500/10' : 'border-gray-100'}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="text-lg font-extrabold text-dark-800">{p.name}</div>
                      {p.highlight && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500 text-white">
                          {lang === 'id' ? 'Paling Diminati' : 'Most Popular'}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className={`text-3xl font-extrabold ${p.highlight ? 'text-teal-600' : 'text-dark-800'}`}>{p.price}</span>
                      <span className="text-sm font-semibold text-gray-400">{p.unit}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-5">{p.bestFor}</div>
                    <ul className="space-y-2.5 mb-6">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${p.highlight ? 'text-teal-500' : 'text-gray-400'}`} />
                          <span className="text-sm text-gray-700">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={c.primaryCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors ${
                        p.highlight
                          ? 'bg-teal-500 hover:bg-teal-600 text-white shadow-md shadow-teal-500/25'
                          : 'bg-gray-50 hover:bg-teal-50 text-dark-800 hover:text-teal-700 border border-gray-200 hover:border-teal-200'
                      }`}
                    >
                      {p.cta} <ArrowRight size={16} />
                    </a>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">{c.pricing.note}</p>
            </section>
          )}

          {c.leadForm && c.faq && (
            <section className="mt-16">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-dark-800 mb-2">{c.leadForm.title}</h2>
                  <p className="text-gray-600 mb-6">{c.leadForm.desc}</p>

                  {formStatus === 'sent' ? (
                    <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
                      <div className="text-lg font-extrabold text-dark-800 mb-1">{c.leadForm.successTitle}</div>
                      <div className="text-sm text-gray-600 mb-5">{c.leadForm.successDesc}</div>
                      <a
                        href={c.primaryCta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-colors"
                      >
                        {c.leadForm.waBtn} <ExternalLink size={16} />
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">{c.leadForm.fields.url}</label>
                        <input
                          value={form.url}
                          onChange={(e) => setForm((f) => ({ ...f, url: e.target.value }))}
                          placeholder={c.leadForm.placeholder.url}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-300"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">{c.leadForm.fields.niche}</label>
                        <input
                          value={form.niche}
                          onChange={(e) => setForm((f) => ({ ...f, niche: e.target.value }))}
                          placeholder={c.leadForm.placeholder.niche}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">{c.leadForm.fields.whatsapp}</label>
                        <input
                          value={form.whatsapp}
                          onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
                          placeholder={c.leadForm.placeholder.whatsapp}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-300"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-500 hover:bg-teal-600 disabled:opacity-60 text-white font-extrabold rounded-xl transition-colors"
                      >
                        {c.leadForm.submit} <ArrowRight size={16} />
                      </button>
                    </form>
                  )}
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-7 sm:p-8">
                  <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-700 mb-4">
                    {c.faq.badge}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-dark-800 mb-2">{c.faq.h2}</h2>
                  <p className="text-gray-600 mb-6">{c.faq.desc}</p>

                  <div className="space-y-3">
                    {c.faq.items.map((it, idx) => {
                      const open = faqOpen === idx
                      return (
                        <button
                          key={it.q}
                          type="button"
                          onClick={() => setFaqOpen((cur) => (cur === idx ? -1 : idx))}
                          className="w-full text-left bg-white border border-gray-200 hover:border-teal-200 rounded-2xl p-5 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="font-extrabold text-dark-800">{it.q}</div>
                            <ChevronDown
                              size={18}
                              className={`flex-shrink-0 mt-0.5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                          </div>
                          {open && (
                            <div className="text-sm text-gray-600 leading-relaxed mt-3">
                              {it.a}
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
          )}

          {c.areas && (
            <section className="mt-16">
              <div className="bg-white border border-gray-100 rounded-3xl p-7 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="text-lg font-extrabold text-dark-800 mb-1">{c.areas.title}</div>
                  <div className="text-sm text-gray-600">{c.areas.desc}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.areas.links.map((l) => (
                    <Link
                      key={l.href}
                      to={l.href}
                      className="px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-teal-50 text-dark-800 hover:text-teal-700 border border-gray-200 hover:border-teal-200 font-bold text-sm transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
