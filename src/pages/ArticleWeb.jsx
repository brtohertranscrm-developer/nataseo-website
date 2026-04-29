import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import Logo from '../components/Logo'

const TITLE = 'Jasa Pembuatan Website Yogyakarta: Website Profesional untuk Bisnis Anda | NataSEO'
const DESC = 'Di era digital, website profesional adalah investasi terpenting. Jasa pembuatan website Yogyakarta dari NataSEO hadir untuk membantu bisnis Anda tampil online dan menghasilkan pelanggan baru.'
const URL = 'https://nataseo.asia/artikel/jasa-pembuatan-website-yogyakarta'

export default function ArticleWeb() {
  const navigate = useNavigate()

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
        <meta property="og:image" content="https://nataseo.asia/og-image.png" />
        <meta property="og:locale" content="id_ID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
        <meta name="twitter:image" content="https://nataseo.asia/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Pentingnya Website Profesional untuk Bisnis di Era Digital",
          "description": DESC,
          "url": URL,
          "datePublished": "2026-04-29",
          "dateModified": "2026-04-29",
          "author": { "@type": "Organization", "name": "NataSEO", "url": "https://nataseo.asia" },
          "publisher": { "@type": "Organization", "name": "NataSEO", "logo": { "@type": "ImageObject", "url": "https://nataseo.asia/favicon.svg" } },
          "image": "https://nataseo.asia/og-image.png",
          "inLanguage": "id",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://nataseo.asia" },
              { "@type": "ListItem", "position": 2, "name": "Jasa Pembuatan Website Yogyakarta" }
            ]
          }
        })}</script>
      </Helmet>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-500 hover:text-teal-500 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </button>
          <button onClick={() => navigate('/')}>
            <Logo size="sm" />
          </button>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-50 text-gold-600 rounded-full text-xs font-semibold">
            <Tag size={11} /> Web Engine
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Calendar size={11} /> 29 April 2026</span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Clock size={11} /> 4 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark-800 leading-tight mb-6">
          Pentingnya Website Profesional untuk Bisnis di Era Digital
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-10 border-l-4 border-gold-400 pl-4">
          Di era digital ini, website bukan lagi pilihan — melainkan kebutuhan. Pelajari mengapa website profesional adalah investasi terpenting untuk pertumbuhan bisnis Anda dan apa saja yang membedakan website biasa dengan website yang benar-benar menghasilkan.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Website adalah Kantor Digital Anda yang Buka 24 Jam</h2>
            <p>Bayangkan memiliki karyawan yang bekerja 24 jam sehari, 7 hari seminggu, tanpa libur, tanpa gaji — itulah website profesional Anda. Kapanpun calon pelanggan ingin mengetahui bisnis Anda, website Anda siap menjawab pertanyaan mereka, menampilkan produk, dan bahkan memproses pembelian.</p>
            <p className="mt-3">Riset dari Google menunjukkan bahwa <strong>97% konsumen mencari bisnis secara online</strong> sebelum melakukan pembelian. Tanpa website, Anda kehilangan hampir semua peluang tersebut ke kompetitor.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Perbedaan Website Biasa vs Website Profesional</h2>
            <p>Tidak semua website diciptakan sama. Berikut perbedaan yang paling berdampak pada bisnis Anda:</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                { label: 'Website Biasa', points: ['Loading lambat (>3 detik)', 'Tidak mobile-friendly', 'Desain tidak menarik', 'Tidak ada strategi SEO', 'Konversi rendah'], bad: true },
                { label: 'Website Profesional', points: ['Loading cepat (<1 detik)', 'Optimal di semua device', 'Desain modern & terpercaya', 'Dioptimasi untuk Google', 'Dirancang untuk konversi'], bad: false },
              ].map((col, i) => (
                <div key={i} className={`p-4 rounded-xl ${col.bad ? 'bg-red-50' : 'bg-teal-50'}`}>
                  <div className={`font-bold text-sm mb-3 ${col.bad ? 'text-red-600' : 'text-teal-600'}`}>{col.label}</div>
                  <ul className="space-y-1.5">
                    {col.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className={col.bad ? 'text-red-400' : 'text-teal-500'}>
                          {col.bad ? '✗' : '✓'}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">5 Elemen Wajib Website yang Menghasilkan</h2>
            <ol className="space-y-4">
              {[
                { num: '01', title: 'Kecepatan Loading', desc: 'Setiap detik keterlambatan loading menurunkan konversi hingga 7%. Google juga menjadikan kecepatan sebagai faktor ranking.' },
                { num: '02', title: 'Desain Mobile-First', desc: 'Lebih dari 60% traffic web berasal dari smartphone. Website yang tidak nyaman di mobile akan kehilangan mayoritas pengunjungnya.' },
                { num: '03', title: 'Call-to-Action yang Jelas', desc: "Setiap halaman harus punya tujuan yang jelas — apakah itu tombol 'Hubungi Kami', 'Beli Sekarang', atau 'Daftar Gratis'." },
                { num: '04', title: 'Konten yang Meyakinkan', desc: 'Tampilkan keunggulan Anda, testimoni pelanggan (jika ada), dan jawaban atas pertanyaan yang paling sering diajukan calon pelanggan.' },
                { num: '05', title: 'Keamanan SSL', desc: 'Website dengan HTTPS lebih dipercaya oleh pengunjung dan mendapat nilai lebih dari Google dibanding website HTTP.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="text-gold-500 font-extrabold text-lg w-8 flex-shrink-0">{item.num}</span>
                  <div>
                    <span className="font-bold text-dark-800">{item.title}. </span>
                    <span className="text-gray-600">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Berapa Biaya Jasa Pembuatan Website Profesional?</h2>
            <p>Biaya pembuatan website sangat bervariasi tergantung kebutuhan bisnis Anda. Namun yang perlu diingat: website yang baik adalah <strong>investasi, bukan biaya</strong>. Website yang berhasil mengkonversi pengunjung menjadi pelanggan akan membayar dirinya sendiri berkali-kali lipat.</p>
            <p className="mt-3">Di NataSEO, kami membangun website yang tidak hanya cantik secara visual, tapi juga dioptimasi untuk performa, SEO, dan konversi — disesuaikan dengan anggaran dan kebutuhan bisnis Anda.</p>
          </section>

          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 text-center mt-10">
            <h3 className="text-white text-xl font-bold mb-2">Tertarik Membangun Website Profesional?</h3>
            <p className="text-gray-400 text-sm mb-6">Diskusikan kebutuhan website Anda bersama tim NataSEO. Konsultasi gratis, tanpa komitmen.</p>
            <button
              onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300) }}
              className="px-7 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
            >
              Konsultasi Gratis Sekarang
            </button>
          </div>
        </div>
      </article>

      <div className="border-t border-gray-100 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NataSEO®. All rights reserved.
      </div>
    </div>
  )
}
