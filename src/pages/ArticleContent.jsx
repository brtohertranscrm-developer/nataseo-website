import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import Logo from '../components/Logo'

const TITLE = 'Strategi Content Marketing yang Efektif untuk Bisnis di Indonesia | NataSEO'
const DESC = 'Content marketing yang tepat bisa menjadi mesin penghasil pelanggan terbaik tanpa biaya iklan yang membengkak. Pelajari strategi content marketing efektif untuk bisnis Indonesia di sini.'
const URL = 'https://nataseo.asia/artikel/strategi-content-marketing-bisnis-indonesia'

export default function ArticleContent() {
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
          "headline": "Strategi Content Marketing yang Efektif untuk Bisnis di Indonesia",
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
              { "@type": "ListItem", "position": 2, "name": "Strategi Content Marketing" }
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-semibold">
            <Tag size={11} /> Content Marketing
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Calendar size={11} /> 29 April 2026</span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Clock size={11} /> 6 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark-800 leading-tight mb-6">
          Strategi Content Marketing yang Efektif untuk Bisnis di Indonesia
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-10 border-l-4 border-teal-400 pl-4">
          Content marketing bukan sekadar membuat artikel — ini adalah strategi jangka panjang yang, jika dilakukan dengan benar, bisa menjadi mesin penghasil pelanggan terbaik untuk bisnis Anda tanpa biaya iklan yang terus membengkak.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Mengapa Content Marketing Penting di 2025?</h2>
            <p>Di tengah banjir iklan digital, konsumen semakin pintar dan skeptis. Mereka mengabaikan iklan, memasang ad-blocker, dan hanya mempercayai brand yang memberikan nilai nyata sebelum meminta sesuatu.</p>
            <p className="mt-3">Content marketing menjawab kebutuhan ini: Anda memberikan informasi berharga, membangun kepercayaan, dan ketika calon pelanggan siap membeli — <strong>mereka langsung mencari Anda</strong>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Jenis Konten yang Paling Efektif untuk Bisnis Indonesia</h2>
            <div className="space-y-4 mt-4">
              {[
                { type: 'Artikel Blog SEO', desc: 'Konten yang menjawab pertanyaan yang dicari calon pelanggan di Google. Ini adalah pondasi traffic organik jangka panjang.', impact: 'Traffic organik' },
                { type: 'Panduan & Tutorial', desc: 'Konten mendalam yang menunjukkan keahlian Anda dan membantu audiens menyelesaikan masalah mereka.', impact: 'Kepercayaan & Authority' },
                { type: 'Studi Kasus', desc: 'Cerita nyata tentang bagaimana produk/layanan Anda membantu klien. Sangat efektif untuk konversi.', impact: 'Konversi tinggi' },
                { type: 'Konten Media Sosial', desc: 'Tips singkat, behind-the-scenes, dan konten engaging yang membangun komunitas dan awareness brand.', impact: 'Brand awareness' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="font-bold text-dark-800 text-sm mb-1">{item.type}</div>
                    <div className="text-gray-600 text-sm">{item.desc}</div>
                  </div>
                  <span className="flex-shrink-0 self-start px-2 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-lg">{item.impact}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Cara Membuat Konten yang Ranking di Google</h2>
            <p>Membuat konten saja tidak cukup — konten Anda harus dioptimasi agar bisa ditemukan di Google:</p>
            <ol className="mt-4 space-y-3">
              {[
                { num: '01', title: 'Riset Keyword Terlebih Dahulu', desc: 'Cari tahu kata kunci apa yang benar-benar dicari calon pelanggan Anda. Gunakan Google Search Console, Google Trends, atau tools seperti Ubersuggest.' },
                { num: '02', title: 'Buat Konten yang Lebih Baik dari Kompetitor', desc: 'Cari artikel yang sudah ranking untuk keyword target Anda, lalu buat yang lebih lengkap, lebih update, dan lebih mudah dibaca.' },
                { num: '03', title: 'Optimasi On-Page', desc: 'Masukkan keyword utama di judul (H1), sub-judul (H2), paragraf pertama, dan meta description. Tapi jangan berlebihan — tulis untuk manusia, bukan robot.' },
                { num: '04', title: 'Internal Linking', desc: 'Hubungkan artikel satu dengan yang lain di website Anda. Ini membantu Google memahami struktur konten Anda dan meningkatkan waktu kunjungan.' },
                { num: '05', title: 'Update Konten Secara Berkala', desc: 'Google menyukai konten yang segar dan relevan. Update artikel lama dengan informasi terbaru secara rutin.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 p-4 bg-teal-50 rounded-xl list-none">
                  <span className="text-teal-500 font-extrabold text-lg w-8 flex-shrink-0">{item.num}</span>
                  <div>
                    <span className="font-bold text-dark-800">{item.title}. </span>
                    <span className="text-gray-600">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Kesalahan Content Marketing yang Harus Dihindari</h2>
            <ul className="space-y-3 mt-4">
              {[
                'Membuat konten tanpa riset keyword — menghasilkan artikel yang tidak dicari siapapun',
                'Terlalu fokus promosi produk — audiens datang untuk informasi, bukan iklan',
                'Tidak konsisten — konten marketing butuh konsistensi, bukan sprint satu kali',
                'Mengabaikan distribusi — konten terbaik pun percuma jika tidak dipromosikan',
                'Tidak mengukur hasil — tanpa data, Anda tidak tahu mana yang bekerja',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Mulai dari Mana?</h2>
            <p>Jika Anda baru memulai content marketing, fokuslah pada satu jenis konten dulu — misalnya artikel blog. Buat 2–4 artikel berkualitas per bulan yang menjawab pertanyaan paling umum dari calon pelanggan Anda. Konsistensi selama 6 bulan akan mulai menunjukkan hasil yang signifikan.</p>
            <p className="mt-3">Tidak punya waktu untuk membuat konten sendiri? Tim content writing NataSEO siap membantu Anda membangun strategi dan mengeksekusi konten yang benar-benar berperforma.</p>
          </section>

          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 text-center mt-10">
            <h3 className="text-white text-xl font-bold mb-2">Butuh Bantuan Strategi Content Marketing?</h3>
            <p className="text-gray-400 text-sm mb-6">Tim content writer NataSEO siap membantu bisnis Anda tampil di Google. Konsultasi gratis.</p>
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
