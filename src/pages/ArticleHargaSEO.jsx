import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import Logo from '../components/Logo'
import RelatedArticles from '../components/RelatedArticles'
import Breadcrumb from '../components/Breadcrumb'
import { useLanguage } from '../contexts/LanguageContext'
import idT from '../translations/id'
import enT from '../translations/en'

const TITLE = 'Berapa Biaya Jasa SEO di Indonesia? Panduan Harga 2026 | NataSEO'
const DESC = 'Panduan lengkap harga jasa SEO di Indonesia 2026. Pelajari faktor yang mempengaruhi biaya, kisaran harga pasar, dan cara memilih paket SEO yang tepat untuk anggaran Anda.'
const URL = 'https://nataseo.asia/artikel/biaya-jasa-seo-indonesia'

export default function ArticleHargaSEO() {
  const navigate = useNavigate()
  const { lang } = useLanguage()
  const t = lang === 'id' ? idT : enT

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://nataseo.asia/og/biaya-jasa-seo-indonesia.svg" />
        <meta property="og:locale" content="id_ID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
        <meta name="twitter:image" content="https://nataseo.asia/og/biaya-jasa-seo-indonesia.svg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Berapa Biaya Jasa SEO di Indonesia? Panduan Harga 2026",
          "description": DESC,
          "url": URL,
          "datePublished": "2026-04-29",
          "dateModified": "2026-04-29",
          "author": { "@type": "Organization", "name": "NataSEO", "url": "https://nataseo.asia" },
          "publisher": { "@type": "Organization", "name": "NataSEO", "logo": { "@type": "ImageObject", "url": "https://nataseo.asia/favicon.svg" } },
          "image": "https://nataseo.asia/og/biaya-jasa-seo-indonesia.svg",
          "inLanguage": "id",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://nataseo.asia" },
              { "@type": "ListItem", "position": 2, "name": "Biaya Jasa SEO Indonesia" }
            ]
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Berapa kisaran harga jasa SEO di Indonesia?",
              "acceptedAnswer": { "@type": "Answer", "text": "Harga jasa SEO di Indonesia berkisar dari Rp 1-3 juta per bulan untuk paket dasar lokal, Rp 3-8 juta untuk SEO nasional, hingga Rp 10 juta ke atas untuk industri kompetitif. Harga bervariasi tergantung persaingan keyword, kondisi website, dan cakupan layanan." }
            },
            {
              "@type": "Question",
              "name": "Apakah ada jasa SEO murah yang tetap berkualitas?",
              "acceptedAnswer": { "@type": "Answer", "text": "Ada, terutama untuk SEO lokal. NataSEO menawarkan jasa SEO Yogyakarta dengan harga kompetitif karena fokus pada keyword lokal yang persaingannya lebih rendah. Yang penting hindari jasa SEO yang menjanjikan hasil instan karena berisiko terkena penalti Google." }
            },
            {
              "@type": "Question",
              "name": "Apa yang membuat harga jasa SEO berbeda-beda?",
              "acceptedAnswer": { "@type": "Answer", "text": "Perbedaan harga dipengaruhi oleh: tingkat persaingan keyword target, kondisi awal website (domain authority, backlink), cakupan layanan (on-page saja vs full SEO), pengalaman agency, dan target area (lokal, nasional, atau internasional)." }
            },
            {
              "@type": "Question",
              "name": "Lebih baik bayar SEO bulanan atau sekali bayar?",
              "acceptedAnswer": { "@type": "Answer", "text": "SEO adalah proses berkelanjutan, bukan sekali jalan. Model bulanan lebih disarankan karena algoritma Google terus berubah dan kompetitor terus berupaya. Paket sekali bayar biasanya hanya untuk audit atau setup awal, bukan untuk mempertahankan dan meningkatkan ranking." }
            }
          ]
        })}</script>
      </Helmet>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-500 hover:text-teal-500 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            {t.article.backBtn}
          </button>
          <button onClick={() => navigate('/')}><Logo size="sm" /></button>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <Breadcrumb items={[{ label: t.breadcrumb.home, href: '/' }, { label: 'Biaya Jasa SEO' }]} />
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-semibold">
            <Tag size={11} /> SEO
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Calendar size={11} /> 29 April 2026</span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Clock size={11} /> 5 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark-800 leading-tight mb-6">
          Berapa Biaya Jasa SEO di Indonesia? Panduan Harga 2026
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-10 border-l-4 border-teal-400 pl-4">
          Salah satu pertanyaan paling umum dari pemilik bisnis adalah: "Berapa harga jasa SEO?" Jawabannya sangat bervariasi — dan memahami apa yang mempengaruhi harga akan membantu Anda membuat keputusan investasi yang tepat.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Faktor yang Mempengaruhi Harga Jasa SEO</h2>
            <div className="space-y-3 mt-4">
              {[
                { title: 'Tingkat Persaingan Keyword', desc: 'Keyword dengan persaingan tinggi (seperti "jasa SEO" secara nasional) membutuhkan lebih banyak upaya dan biaya dibanding keyword lokal atau niche.' },
                { title: 'Kondisi Website Saat Ini', desc: 'Website baru tanpa authority membutuhkan fondasi yang lebih panjang dibanding website yang sudah memiliki backlink dan traffic dasar.' },
                { title: 'Cakupan Layanan', desc: 'Paket yang mencakup technical SEO, konten, dan link building tentu lebih mahal dari yang hanya on-page saja.' },
                { title: 'Target Geografis', desc: 'SEO lokal (kota tertentu) umumnya lebih terjangkau dibanding SEO nasional atau internasional.' },
                { title: 'Pengalaman Agency', desc: 'Agency dengan track record panjang biasanya charge lebih tinggi, namun hasilnya juga lebih terukur.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-dark-800">{item.title}: </span>
                    <span className="text-gray-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">Kisaran Harga Jasa SEO di Indonesia (2026)</h2>
            <div className="space-y-4">
              {[
                { tier: 'SEO Lokal / Pemula', range: 'Rp 1–3 juta/bulan', includes: ['Optimasi on-page dasar', 'Google Business Profile', 'Riset keyword lokal', 'Laporan bulanan sederhana'], color: 'border-gray-200 bg-gray-50' },
                { tier: 'SEO Menengah', range: 'Rp 3–8 juta/bulan', includes: ['Technical SEO lengkap', 'Pembuatan konten 4–8 artikel/bulan', 'Link building moderat', 'Laporan performa detail'], color: 'border-teal-200 bg-teal-50' },
                { tier: 'SEO Kompetitif / Enterprise', range: 'Rp 8–25 juta/bulan', includes: ['Strategi SEO komprehensif', 'Konten intensif (10+ artikel/bulan)', 'Link building agresif', 'Dedicated account manager'], color: 'border-gold-200 bg-gold-50' },
              ].map((tier, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${tier.color}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-dark-800">{tier.tier}</span>
                    <span className="font-extrabold text-teal-600">{tier.range}</span>
                  </div>
                  <ul className="space-y-1">
                    {tier.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-teal-500">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-3">*Harga di atas adalah estimasi pasar umum. Harga aktual bervariasi tergantung kebutuhan spesifik bisnis Anda.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Waspada: Tanda-Tanda Jasa SEO yang Harus Dihindari</h2>
            <ul className="space-y-2 mt-4">
              {[
                'Menjanjikan ranking #1 Google dalam waktu sangat singkat (1–2 minggu)',
                'Harga sangat murah (di bawah Rp 500 ribu/bulan) dengan janji hasil besar',
                'Tidak transparan soal metode yang digunakan',
                'Tidak memberikan laporan performa secara rutin',
                'Menggunakan teknik black-hat yang bisa kena penalti Google',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">SEO Sebagai Investasi, Bukan Biaya</h2>
            <p>Cara terbaik melihat biaya SEO bukan sebagai pengeluaran, tapi sebagai investasi. Jika paket SEO Rp 3 juta/bulan menghasilkan 5 pelanggan baru yang masing-masing bernilai Rp 2 juta, maka ROI-nya sudah 3x lipat di bulan itu saja — dan traffic organik terus tumbuh seiring waktu.</p>
          </section>

          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 text-center mt-10">
            <h3 className="text-white text-xl font-bold mb-2">Ingin Tahu Harga SEO untuk Bisnis Anda?</h3>
            <p className="text-gray-400 text-sm mb-6">NataSEO menawarkan harga yang transparan dan kompetitif. Hubungi kami untuk mendapat penawaran yang disesuaikan.</p>
            <button
              onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300) }}
              className="px-7 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
            >
              Minta Penawaran Gratis
            </button>
          </div>
          <RelatedArticles currentSlug="/artikel/biaya-jasa-seo-indonesia" />
        </div>
      </article>

      <div className="border-t border-gray-100 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NataSEO®. All rights reserved.
      </div>
    </div>
  )
}
