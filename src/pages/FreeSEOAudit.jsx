import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Search, CheckCircle2, ChevronRight, Activity, Smartphone, Lock, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function FreeSEOAudit() {
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en
  
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [status, setStatus] = useState('idle') // idle, scanning, result
  const [scanStep, setScanStep] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const mockMetrics = [
    { key: 'performance', icon: Activity, score: 63, status: 'warning' },
    { key: 'seo', icon: Globe, score: 71, status: 'warning' },
    { key: 'mobile', icon: Smartphone, score: 86, status: 'success' },
    { key: 'security', icon: Lock, score: 92, status: 'success' },
  ]

  useEffect(() => {
    let interval
    if (status === 'scanning') {
      interval = setInterval(() => {
        setScanStep((prev) => {
          if (prev >= t.audit.scanSteps.length - 1) {
            clearInterval(interval)
            setTimeout(() => setStatus('result'), 1000)
            return prev
          }
          return prev + 1
        })
      }, 1500)
    }
    return () => clearInterval(interval)
  }, [status, t.audit.scanSteps.length])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!url || !name || !whatsapp) return
    
    setStatus('scanning')
    setScanStep(0)

    // Silently send lead data to Formspree
    try {
      await fetch('https://formspree.io/f/maqvwvlz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name,
          phone: whatsapp,
          email: 'Tidak diisi (Lead dari SEO Audit)',
          service: 'Free SEO Audit Lead',
          message: `Meminta laporan detail SEO Audit untuk website: ${url}`
        }),
      })
    } catch (error) {
      // Ignore errors silently so user flow is not interrupted
      console.error('Failed to send lead data', error)
    }
  }

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(`Halo NataSEO, saya ${name}. Saya baru saja melakukan Free SEO Audit untuk website saya: ${url}. Saya ingin mendapatkan laporan detail dan rekomendasi perbaikannya.`)
    window.open(`https://wa.me/6281329598263?text=${text}`, '_blank')
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 50) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreBg = (score) => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 50) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{t.audit.title} | NataSEO</title>
        <meta name="description" content={t.audit.desc} />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-20 lg:pt-32 lg:pb-32 relative overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 bg-mesh opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            {t.article.backBtn}
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Search size={16} />
              {t.audit.subtitle}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-dark-800 tracking-tight mb-6">
              {t.audit.title.split('SEO Gratis')[0]}
              <span className="text-teal-500">SEO Gratis</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.audit.desc}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
            {status === 'idle' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">URL Website</label>
                  <input
                    type="url"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={t.audit.urlPlaceholder}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.audit.namePlaceholder}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder={t.audit.whatsappPlaceholder}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <Search size={22} />
                  {t.audit.submitBtn}
                </button>
              </form>
            )}

            {status === 'scanning' && (
              <div className="text-center py-12">
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="absolute inset-0 border-4 border-teal-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-teal-500 rounded-full border-t-transparent animate-spin"></div>
                  <Search size={40} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-4">{t.audit.scanning}</h3>
                <div className="h-8 flex items-center justify-center">
                  <p className="text-gray-500 font-medium animate-pulse">
                    {t.audit.scanSteps[scanStep]}
                  </p>
                </div>
              </div>
            )}

            {status === 'result' && (
              <div className="animate-fade-in">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-800 mb-2">{t.audit.resultTitle}</h3>
                  <p className="text-gray-600">{t.audit.resultDesc}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {mockMetrics.map((metric, idx) => {
                    const Icon = metric.icon
                    return (
                      <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                              <Icon size={20} className="text-gray-600" />
                            </div>
                            <span className="font-semibold text-gray-700">{t.audit.metrics[metric.key]}</span>
                          </div>
                          <span className={`text-2xl font-bold ${getScoreColor(metric.score)}`}>
                            {metric.score}/100
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${getScoreBg(metric.score)}`}
                            style={{ width: `${metric.score}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100 text-center">
                  <h4 className="text-xl font-bold text-dark-800 mb-3">{t.audit.ctaTitle}</h4>
                  <p className="text-gray-600 mb-6">{t.audit.ctaDesc}</p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 transition-all hover:scale-105"
                  >
                    {t.audit.ctaBtn}
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* New Landing Page Content Below Form */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-dark-800 mb-4">{t.auditLanding.problemTitle}</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.auditLanding.problemDesc}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {t.auditLanding.problems.map((prob, i) => (
                <div key={i} className="bg-teal-50/50 rounded-2xl p-8 border border-teal-100/50 hover:bg-teal-50 transition-colors">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-dark-800 mb-3">{prob.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-dark-800">{t.auditLanding.faqTitle}</h2>
              </div>
              <div className="space-y-4">
                {t.auditLanding.faqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-dark-800 mb-2">{faq.q}</h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
