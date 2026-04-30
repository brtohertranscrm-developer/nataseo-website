import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import Logo from '../components/Logo'
import RelatedArticles from '../components/RelatedArticles'
import Breadcrumb from '../components/Breadcrumb'

const TITLE = 'Jasa SEO Yogyakarta: Cara Tingkatkan Ranking Google Bisnis Anda | NataSEO'
const DESC = 'Bisnis sulit ditemukan di Google? Jasa SEO Yogyakarta dari NataSEO membantu Anda tampil di halaman pertama dan mendatangkan pelanggan baru secara organik — tanpa iklan berbayar.'
const URL = 'https://nataseo.asia/artikel/jasa-seo-yogyakarta'

export default function ArticleSEO() {
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
        <meta property="og:image" content="https://nataseo.asia/og/jasa-seo-yogyakarta.svg" />
        <meta property="og:locale" content="id_ID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
        <meta name="twitter:image" content="https://nataseo.asia/og/jasa-seo-yogyakarta.svg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Jasa SEO Yogyakarta: Cara Tingkatkan Ranking Google Bisnis Anda",
          "description": DESC,
          "url": URL,
          "datePublished": "2026-04-29",
          "dateModified": "2026-04-29",
          "author": { "@type": "Organization", "name": "NataSEO", "url": "https://nataseo.asia" },
          "publisher": { "@type": "Organization", "name": "NataSEO", "logo": { "@type": "ImageObject", "url": "https://nataseo.asia/favicon.svg" } },
          "image": "https://nataseo.asia/og/jasa-seo-yogyakarta.svg",
          "inLanguage": "id",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://nataseo.asia" },
              { "@type": "ListItem", "position": 2, "name": "Jasa SEO Yogyakarta" }
            ]
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Apa itu jasa SEO dan bagaimana cara kerjanya?",
              "acceptedAnswer": { "@type": "Answer", "text": "SEO (Search Engine Optimization) adalah proses mengoptimasi website agar tampil di halaman pertama Google secara organik. Jasa SEO dari NataSEO mencakup riset keyword, optimasi on-page, pembuatan konten, dan link building untuk meningkatkan ranking bisnis Anda." }
            },
            {
              "@type": "Question",
              "name": "Berapa lama hasil SEO bisa terlihat?",
              "acceptedAnswer": { "@type": "Answer", "text": "Hasil SEO umumnya mulai terlihat dalam 3-6 bulan. Faktor yang mempengaruhi adalah tingkat persaingan keyword, kondisi website saat ini, dan konsistensi optimasi yang dilakukan. Keyword lokal seperti 'jasa SEO Yogyakarta' biasanya lebih cepat terlihat hasilnya." }
            },
            {
              "@type": "Question",
              "name": "Apakah SEO lebih baik dari Google Ads?",
              "acceptedAnswer": { "@type": "Answer", "text": "SEO dan Google Ads punya keunggulan masing-masing. SEO memberikan traffic organik jangka panjang tanpa biaya per klik, sementara Google Ads memberikan hasil instan tapi berhenti saat anggaran habis. Untuk bisnis jangka panjang, SEO lebih cost-effective." }
            },
            {
              "@type": "Question",
              "name": "Berapa biaya jasa SEO Yogyakarta dari NataSEO?",
              "acceptedAnswer": { "@type": "Answer", "text": "Biaya jasa SEO NataSEO disesuaikan dengan kebutuhan dan skala bisnis Anda. Silakan hubungi kami di hello@pandupradana.my.id atau WhatsApp +62-851-5996-6646 untuk konsultasi gratis dan penawaran yang sesuai budget Anda." }
            }
          ]
        })}</script>
      </Helmet>
      {/* Top nav */}
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
        <Breadcrumb items={[{ label: 'Beranda', href: '/' }, { label: 'Jasa SEO Yogyakarta' }]} />
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-semibold">
            <Tag size={11} /> SEO
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Calendar size={11} /> 29 April 2026</span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Clock size={11} /> 5 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark-800 leading-tight mb-6">
          Jasa SEO Yogyakarta: Cara Tingkatkan Ranking Google Bisnis Anda
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-10 border-l-4 border-teal-400 pl-4">
          Bisnis Anda sulit ditemukan di Google? Jasa SEO Yogyakarta dari NataSEO hadir untuk membantu Anda tampil di halaman pertama dan mendatangkan pelanggan baru secara organik — tanpa iklan berbayar.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Apa Itu SEO dan Mengapa Bisnis Anda Butuh?</h2>
            <p>SEO (Search Engine Optimization) adalah proses mengoptimalkan website Anda agar muncul di posisi teratas hasil pencarian Google. Ketika calon pelanggan mengetik kata kunci seperti <strong>"jasa SEO Yogyakarta"</strong> atau <strong>"toko [produk Anda] Yogyakarta"</strong>, Anda ingin bisnis Anda yang pertama mereka temukan.</p>
            <p className="mt-3">Tanpa SEO, website Anda seperti toko yang berada di gang sempit — ada, tapi tidak ada yang tahu. Dengan SEO yang tepat, website Anda menjadi aset yang terus menghasilkan pengunjung dan pelanggan setiap harinya.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Komponen Utama SEO yang Efektif</h2>
            <p>SEO yang baik terdiri dari beberapa elemen penting yang harus berjalan bersama:</p>
            <ul className="mt-4 space-y-3">
              {[
                { title: 'Technical SEO', desc: 'Memastikan website Anda cepat, mobile-friendly, dan mudah dirayapi oleh Google. Ini adalah fondasi dari semua strategi SEO.' },
                { title: 'On-Page SEO', desc: 'Optimasi konten halaman — judul, meta description, heading, dan penggunaan keyword yang natural dan relevan.' },
                { title: 'Off-Page SEO', desc: 'Membangun reputasi website melalui backlink dari situs terpercaya, yang memberi sinyal positif ke Google.' },
                { title: 'Local SEO', desc: 'Khusus untuk bisnis lokal, memastikan bisnis Anda muncul di Google Maps dan pencarian "near me" di area Yogyakarta.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-dark-800">{item.title}: </span>
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Kenapa SEO Lokal Penting untuk Bisnis di Yogyakarta?</h2>
            <p>Yogyakarta adalah kota yang berkembang pesat dengan persaingan bisnis yang semakin ketat. Riset menunjukkan bahwa <strong>46% pencarian Google memiliki intent lokal</strong> — artinya orang mencari bisnis, produk, atau layanan di area mereka.</p>
            <p className="mt-3">Dengan strategi SEO lokal yang tepat, bisnis Anda bisa:</p>
            <ul className="mt-3 space-y-2">
              {[
                'Muncul di Google Maps ketika orang mencari bisnis di sekitar Yogyakarta',
                'Mendapatkan pelanggan yang sudah siap membeli (high-intent traffic)',
                'Bersaing dengan bisnis besar melalui konten yang lebih relevan secara lokal',
                'Membangun kepercayaan melalui ulasan Google yang terkelola dengan baik',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-teal-500 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Langkah Awal SEO yang Bisa Anda Lakukan Sekarang</h2>
            <p>Sebelum menggunakan jasa SEO profesional, ada beberapa hal dasar yang bisa Anda lakukan sendiri:</p>
            <ol className="mt-4 space-y-3 list-none">
              {[
                { num: '01', title: 'Daftarkan bisnis ke Google Business Profile', desc: 'Gratis dan sangat efektif untuk visibilitas lokal.' },
                { num: '02', title: 'Pastikan website mobile-friendly', desc: 'Lebih dari 60% pencarian dilakukan lewat smartphone.' },
                { num: '03', title: 'Buat konten yang menjawab pertanyaan pelanggan', desc: 'Artikel blog yang relevan adalah sumber traffic organik terbaik.' },
                { num: '04', title: 'Kumpulkan ulasan Google dari pelanggan', desc: 'Ulasan positif meningkatkan kepercayaan dan ranking lokal.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 p-4 bg-teal-50 rounded-xl">
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
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Berapa Lama SEO Mulai Memberikan Hasil?</h2>
            <p>SEO adalah investasi jangka panjang. Umumnya, hasil mulai terlihat dalam <strong>3–6 bulan</strong> tergantung tingkat persaingan keyword dan kondisi awal website Anda. Namun, hasilnya berkelanjutan — berbeda dengan iklan yang berhenti begitu budget habis.</p>
            <p className="mt-3">Untuk keyword lokal seperti <em>"jasa SEO Yogyakarta"</em> atau <em>"toko [niche] Yogyakarta"</em>, persaingannya umumnya lebih rendah sehingga hasil bisa terlihat lebih cepat.</p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 text-center mt-10">
            <h3 className="text-white text-xl font-bold mb-2">Siap Tingkatkan Ranking Google Bisnis Anda?</h3>
            <p className="text-gray-400 text-sm mb-6">Konsultasikan kebutuhan SEO Anda dengan tim NataSEO. Gratis, tanpa komitmen.</p>
            <button
              onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300) }}
              className="px-7 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
            >
              Konsultasi Gratis Sekarang
            </button>
          <RelatedArticles currentSlug="/artikel/jasa-seo-yogyakarta" />
          </div>
        </div>
      </article>

      {/* Footer simple */}
      <div className="border-t border-gray-100 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NataSEO®. All rights reserved.
      </div>
    </div>
  )
}
