import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

export default function Contact() {
  const sectionRef = useRef(null)
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

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

  const waUrl = `https://wa.me/6285159966646?text=${t.contact.whatsappLabel ? encodeURIComponent(lang === 'en' ? "Hello NataSEO, I'd like to consult about my project" : 'Halo NataSEO, saya ingin konsultasi project saya') : ''}`

  return (
    <section id="contact" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span className="text-teal-600 text-sm font-semibold">{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-800 mb-4">
            {t.contact.h2a}{' '}
            <span className="text-gradient-teal">{t.contact.h2b}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-xl font-bold text-dark-800 mb-2">{t.contact.infoTitle}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t.contact.freeDesc}
              </p>
            </div>

            <div className="animate-on-scroll space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'hello@pandupradana.my.id', href: 'mailto:hello@pandupradana.my.id' },
                { icon: Phone, label: 'WhatsApp', value: '+62 851-5996-6646', href: 'https://wa.me/6285159966646' },
                { icon: MapPin, label: t.contact.officeLabel, value: 'Yogyakarta, Indonesia' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-teal-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-dark-800 font-semibold text-sm hover:text-teal-500 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-dark-800 font-semibold text-sm">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="animate-on-scroll">
              <p className="text-xs text-gray-400 mb-2">{t.contact.whatsappLabel}</p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 text-sm"
              >
                <MessageSquare size={18} />
                {t.contact.whatsappBtn}
              </a>
            </div>

            {/* Free consultation card */}
            <div className="animate-on-scroll bg-teal-50 border border-teal-100 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-dark-800 font-semibold text-sm">{t.contact.freeLabel}</span>
              </div>
              <p className="text-gray-500 text-xs">
                {t.contact.freeDesc}
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-800 mb-2">{t.contact.successTitle}</h3>
                  <p className="text-gray-500 text-sm">
                    {t.contact.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-800 mb-1.5">
                        {lang === 'id' ? 'Nama Lengkap' : 'Full Name'} <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-dark-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-800 mb-1.5">
                        {lang === 'id' ? 'Alamat Email' : 'Email Address'} <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-dark-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-800 mb-1.5">Phone / WhatsApp</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+62 812 ..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-dark-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-800 mb-1.5">
                        {lang === 'id' ? 'Layanan yang Dibutuhkan' : 'Service Needed'} <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-dark-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors bg-white"
                      >
                        <option value="">{t.contact.servicePlaceholder}</option>
                        {t.contact.serviceOptions.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-800 mb-1.5">
                      {lang === 'id' ? 'Ceritakan Project Anda' : 'Tell Us About Your Project'} <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t.contact.msgPlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-dark-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white font-bold rounded-xl transition-all duration-200 shadow-md shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-[1.02]"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {t.contact.submitBtn}
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
