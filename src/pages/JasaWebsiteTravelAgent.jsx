import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink, Globe2, MessageCircle, Plane, Search, ShieldCheck, Smartphone } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import WhatsAppButton from '../components/WhatsAppButton'
import { useLanguage } from '../contexts/LanguageContext'
import id from '../translations/id'
import en from '../translations/en'

const URL = 'https://nataseo.asia/jasa-website-travel-agent'
const TITLE = 'Jasa Website Travel Agent — Website Tour yang Siap Booking | NataSEO'
const DESC = 'Jasa website travel agent untuk paket tour, open trip, rental, dan itinerary custom. Cepat, mobile-friendly, SEO-ready, dan terhubung ke WhatsApp.'
const WA_URL = 'https://wa.me/6285159966646?text=Halo%20NataSEO%2C%20saya%20mau%20konsultasi%20jasa%20website%20travel%20agent.%20Boleh%20dibantu%3F'

const problems = [
  { title: 'Calon traveler sulit percaya', desc: 'Paket terlihat menarik, tapi website belum menampilkan itinerary, foto, legalitas, review, dan cara booking dengan rapi.' },
  { title: 'Semua inquiry numpuk di chat', desc: 'Admin harus menjawab pertanyaan berulang tentang harga, jadwal, fasilitas, meeting point, dan cara pembayaran.' },
  { title: 'Tidak siap ditemukan Google', desc: 'Halaman paket belum punya struktur SEO, internal link, schema, dan konten pendukung untuk keyword travel.' },
]

const features = [
  { icon: Plane, kicker: 'Paket Tour', title: 'Halaman Paket yang Jelas', desc: 'Itinerary, harga, include/exclude, jadwal, meeting point, FAQ, dan CTA booking disusun agar mudah dipahami.' },
  { icon: Smartphone, kicker: 'Mobile First', title: 'Nyaman Dibuka dari HP', desc: 'Mayoritas calon traveler datang dari mobile. Layout dibuat cepat, ringan, dan mudah chat ke WhatsApp.' },
  { icon: Search, kicker: 'SEO Ready', title: 'Struktur Siap Ranking', desc: 'URL, heading, metadata, schema, internal link, dan konten dasar disiapkan sejak awal.' },
  { icon: MessageCircle, kicker: 'Booking', title: 'CTA WhatsApp Terarah', desc: 'Tombol booking bisa membawa konteks paket agar admin tidak mulai chat dari nol.' },
  { icon: ShieldCheck, kicker: 'Trust', title: 'Elemen Kepercayaan', desc: 'Profil bisnis, galeri, testimoni, kebijakan, dan informasi kontak ditampilkan transparan.' },
  { icon: Globe2, kicker: 'Scale', title: 'Bisa Bilingual', desc: 'Siap dibuat Indonesia/Inggris jika target market mencakup wisatawan mancanegara.' },
]

const packages = [
  { name: 'Starter Travel', price: 'Mulai 3 jutaan', desc: 'Landing page travel agent untuk validasi brand dan inquiry cepat.', items: ['Homepage conversion', '3–5 section utama', 'CTA WhatsApp', 'Basic SEO setup'] },
  { name: 'Tour Catalog', price: 'Mulai 6 jutaan', desc: 'Website katalog paket tour untuk travel agent yang punya banyak produk.', items: ['Halaman paket tour', 'Kategori destinasi', 'Galeri & testimoni', 'SEO service pages'], highlight: true },
  { name: 'Custom Travel Platform', price: 'By scope', desc: 'Website custom untuk kebutuhan lebih spesifik seperti booking flow atau multi-admin.', items: ['Flow booking custom', 'Integrasi form/CRM', 'Bilingual content', 'Tracking leads'] },
]

const faqs = [
  { q: 'Apakah website travel agent bisa langsung menerima booking?', a: 'Bisa. Untuk tahap awal biasanya diarahkan ke WhatsApp dengan konteks paket. Jika butuh flow lebih lengkap, bisa dibuat form booking atau sistem custom.' },
  { q: 'Apakah termasuk SEO?', a: 'Termasuk fondasi SEO seperti struktur halaman, meta title, meta description, heading, dan schema dasar. Untuk optimasi bulanan, bisa dilanjutkan ke paket SEO.' },
  { q: 'Bisa buat website paket tour banyak destinasi?', a: 'Bisa. Struktur terbaik biasanya memakai halaman kategori destinasi, halaman detail paket, dan konten pendukung agar mudah diskalakan.' },
  { q: 'Berapa lama pengerjaannya?', a: 'Landing sederhana biasanya 1–2 minggu setelah materi siap. Katalog paket atau custom flow membutuhkan estimasi sesuai jumlah halaman dan fitur.' },
]

export default function JasaWebsiteTravelAgent() {
  const { lang } = useLanguage()
  const t = lang === 'id' ? id : en
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'NataSEO',
    url: URL,
    serviceType: 'Jasa Website Travel Agent',
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    address: { '@type': 'PostalAddress', addressLocality: 'Yogyakarta', addressCountry: 'ID' },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://nataseo.asia/og-image.webp" />
        <meta property="og:locale" content="id_ID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
        <meta name="twitter:image" content="https://nataseo.asia/og-image.webp" />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-24 pb-20 lg:pt-32 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-5" />
        <div className="absolute -top-20 right-0 w-[32rem] h-[32rem] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-96 -left-20 w-[24rem] h-[24rem] bg-gold-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-6 transition-colors">
            <ArrowLeft size={20} />
            {t.article.backBtn}
          </Link>

          <Breadcrumb items={[{ label: t.nav.home, href: '/' }, { label: 'Jasa Website Travel Agent', href: '/jasa-website-travel-agent' }]} />

          <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <Plane size={16} /> Travel Website · SEO Ready · WhatsApp Booking
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-800 tracking-tight mb-5">
                Jasa Website <span className="text-gradient-teal">Travel Agent</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-7 max-w-2xl">
                Kami membangun website travel agent yang tidak hanya terlihat profesional, tapi juga membantu calon traveler memahami paket, percaya pada brand, dan lebih cepat menghubungi admin untuk booking.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-all duration-200 shadow-md shadow-teal-500/30 hover:scale-105">
                  Konsultasi Website Travel <ArrowRight size={18} />
                </a>
                <Link to="/artikel/jasa-pembuatan-website-yogyakarta" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-teal-50 text-dark-800 hover:text-teal-700 font-bold rounded-xl border border-gray-200 hover:border-teal-200 transition-all duration-200">
                  Lihat Panduan Website <ExternalLink size={18} />
                </Link>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {['Cocok untuk travel agent, open trip, private tour, dan rental wisata', 'Struktur paket tour dibuat jelas: itinerary, harga, fasilitas, FAQ', 'SEO-ready untuk keyword destinasi dan paket tour', 'CTA WhatsApp terarah agar inquiry lebih berkualitas'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-700">
                    <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.08)] p-7 sm:p-8">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Output utama</div>
              <h2 className="text-2xl font-extrabold text-dark-800 mb-3">Website yang siap dipakai jualan paket tour</h2>
              <p className="text-gray-600 mb-6">Bukan template kosong. Kami susun struktur halaman berdasarkan cara calon traveler membandingkan paket sebelum chat.</p>
              <div className="space-y-4">
                {['Homepage travel agent yang jelas dan meyakinkan', 'Halaman paket/destinasi dengan CTA booking', 'Galeri, testimoni, dan elemen trust', 'Fondasi SEO teknis dan tracking lead'].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <CheckCircle size={18} className="text-teal-500 flex-shrink-0" />
                    <span className="font-semibold text-dark-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid lg:grid-cols-3 gap-6 mb-16">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Masalah umum</div>
                <h3 className="text-lg font-extrabold text-dark-800 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </section>

          <section className="bg-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-10 mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-700">Yang dikerjakan</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-800 mt-4">Fitur website travel agent yang kami prioritaskan</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Fokusnya sederhana: mudah ditemukan, mudah dipahami, dan mudah menghasilkan inquiry.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ icon: Icon, ...feature }) => (
                <div key={feature.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <Icon size={22} className="text-teal-500 mb-4" />
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{feature.kicker}</div>
                  <div className="text-base font-extrabold text-dark-800 mb-2">{feature.title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{feature.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-800">Paket jasa website travel agent</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Harga final mengikuti jumlah halaman, materi, bahasa, dan kebutuhan fitur.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {packages.map((pack) => (
                <div key={pack.name} className={`rounded-3xl border p-7 ${pack.highlight ? 'bg-dark-800 border-dark-700 text-white shadow-xl' : 'bg-white border-gray-100 shadow-sm'}`}>
                  <h3 className={`text-xl font-extrabold mb-2 ${pack.highlight ? 'text-white' : 'text-dark-800'}`}>{pack.name}</h3>
                  <div className="text-2xl font-extrabold text-teal-500 mb-3">{pack.price}</div>
                  <p className={pack.highlight ? 'text-gray-300 mb-5' : 'text-gray-600 mb-5'}>{pack.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {pack.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle size={15} className="text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className={pack.highlight ? 'text-gray-200' : 'text-gray-700'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={`inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold transition-colors ${pack.highlight ? 'bg-teal-500 hover:bg-teal-600 text-white' : 'bg-gray-50 hover:bg-teal-50 text-dark-800 hover:text-teal-700 border border-gray-200 hover:border-teal-200'}`}>
                    Tanya Paket Ini <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-teal-50 border border-teal-100 rounded-3xl p-7 sm:p-8">
              <h2 className="text-2xl font-extrabold text-dark-800 mb-3">Cocok untuk siapa?</h2>
              <p className="text-gray-600 mb-5">Money page ini ditujukan untuk bisnis travel yang ingin punya aset digital sendiri, bukan hanya mengandalkan marketplace atau Instagram.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {['Travel agent lokal', 'Open trip organizer', 'Private tour operator', 'Rental mobil wisata', 'Paket honeymoon', 'Tour internasional'].map((item) => (
                  <div key={item} className="bg-white rounded-xl border border-teal-100 px-4 py-3 font-semibold text-dark-800">{item}</div>
                ))}
              </div>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-colors">
                Diskusikan Website Travel <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-7 sm:p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-700 mb-4">FAQ</div>
              <h2 className="text-2xl font-extrabold text-dark-800 mb-5">Pertanyaan umum</h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <button key={faq.q} type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="w-full text-left bg-gray-50 hover:bg-teal-50 rounded-2xl border border-gray-100 p-5 transition-colors">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-extrabold text-dark-800">{faq.q}</span>
                      <span className="text-teal-500 font-bold">{openFaq === index ? '−' : '+'}</span>
                    </div>
                    {openFaq === index && <p className="text-sm text-gray-600 leading-relaxed mt-3">{faq.a}</p>}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
