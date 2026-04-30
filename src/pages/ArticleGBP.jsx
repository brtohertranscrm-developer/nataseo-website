import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import Logo from '../components/Logo'
import RelatedArticles from '../components/RelatedArticles'

const TITLE = 'Cara Daftar Google Business Profile untuk Bisnis Lokal Indonesia | NataSEO'
const DESC = 'Google Business Profile adalah tool SEO lokal paling powerful — dan gratis. Panduan lengkap cara daftar dan optimasi GBP agar bisnis Anda muncul di Google Maps dan pencarian lokal.'
const URL = 'https://nataseo.asia/artikel/cara-daftar-google-business-profile'

export default function ArticleGBP() {
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
        <meta property="og:image" content="https://nataseo.asia/og/cara-daftar-google-business-profile.svg" />
        <meta property="og:locale" content="id_ID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
        <meta name="twitter:image" content="https://nataseo.asia/og/cara-daftar-google-business-profile.svg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Cara Daftar Google Business Profile untuk Bisnis Lokal Indonesia",
          "description": DESC,
          "url": URL,
          "datePublished": "2026-04-29",
          "dateModified": "2026-04-29",
          "author": { "@type": "Organization", "name": "NataSEO", "url": "https://nataseo.asia" },
          "publisher": { "@type": "Organization", "name": "NataSEO", "logo": { "@type": "ImageObject", "url": "https://nataseo.asia/favicon.svg" } },
          "image": "https://nataseo.asia/og/cara-daftar-google-business-profile.svg",
          "inLanguage": "id",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://nataseo.asia" },
              { "@type": "ListItem", "position": 2, "name": "Cara Daftar Google Business Profile" }
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
          <button onClick={() => navigate('/')}><Logo size="sm" /></button>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-semibold">
            <Tag size={11} /> SEO Lokal
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Calendar size={11} /> 29 April 2026</span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Clock size={11} /> 4 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark-800 leading-tight mb-6">
          Cara Daftar Google Business Profile untuk Bisnis Lokal Indonesia
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-10 border-l-4 border-teal-400 pl-4">
          Google Business Profile (GBP) adalah salah satu tool SEO lokal paling powerful — dan sepenuhnya gratis. Dengan mendaftarkan bisnis Anda, Anda bisa muncul di Google Maps dan hasil pencarian lokal, menjangkau pelanggan yang tepat di area Anda.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Apa Itu Google Business Profile?</h2>
            <p>Google Business Profile (sebelumnya Google My Business) adalah profil bisnis gratis yang muncul di Google Search dan Google Maps ketika orang mencari bisnis Anda atau bisnis serupa di area tertentu.</p>
            <p className="mt-3">Dengan GBP yang dioptimasi, bisnis Anda bisa muncul di <strong>"3-Pack"</strong> — tiga bisnis teratas yang ditampilkan Google di peta untuk pencarian lokal. Posisi ini sangat berharga karena mendapat klik jauh lebih banyak dari hasil organik biasa.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Langkah Daftar Google Business Profile</h2>
            <ol className="space-y-4 mt-4">
              {[
                { num: '01', title: 'Buka business.google.com', desc: 'Login dengan akun Google bisnis Anda. Disarankan menggunakan email khusus bisnis, bukan email pribadi.' },
                { num: '02', title: 'Masukkan Nama Bisnis', desc: 'Ketik nama bisnis Anda persis seperti yang Anda gunakan secara resmi. Konsistensi nama penting untuk SEO lokal.' },
                { num: '03', title: 'Pilih Kategori Bisnis', desc: 'Pilih kategori yang paling sesuai dengan bisnis Anda. Ini mempengaruhi untuk keyword apa bisnis Anda akan muncul.' },
                { num: '04', title: 'Tambahkan Lokasi atau Area Layanan', desc: 'Jika punya toko fisik, masukkan alamat lengkap. Jika bisnis online atau jasa, tentukan area layanan Anda.' },
                { num: '05', title: 'Verifikasi Bisnis', desc: 'Google akan mengirim kartu pos dengan kode verifikasi ke alamat bisnis Anda (5–14 hari). Beberapa bisnis bisa verifikasi via telepon atau email.' },
                { num: '06', title: 'Lengkapi Profil', desc: 'Tambahkan jam operasional, nomor telepon, website, foto bisnis, dan deskripsi yang mengandung keyword relevan.' },
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
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Tips Optimasi GBP agar Ranking Lebih Tinggi</h2>
            <ul className="space-y-3 mt-4">
              {[
                { title: 'Foto berkualitas tinggi', desc: 'Bisnis dengan foto mendapat 42% lebih banyak permintaan arah dan 35% lebih banyak klik ke website.' },
                { title: 'Minta ulasan dari pelanggan', desc: 'Ulasan adalah faktor ranking lokal terbesar. Kirim link GBP ke pelanggan puas dan minta mereka meninggalkan ulasan.' },
                { title: 'Balas semua ulasan', desc: 'Membalas ulasan — baik positif maupun negatif — menunjukkan bisnis yang aktif dan peduli.' },
                { title: 'Post rutin', desc: 'Gunakan fitur Posts di GBP untuk share promo, artikel, atau update bisnis. Ini sinyal aktivitas ke Google.' },
                { title: 'Pastikan NAP konsisten', desc: 'Name, Address, Phone (NAP) harus identik di semua platform — GBP, website, media sosial, dan direktori bisnis.' },
              ].map((item, i) => (
                <li key={i} className="p-4 bg-gray-50 rounded-xl list-none">
                  <span className="font-bold text-dark-800">{item.title}: </span>
                  <span className="text-gray-600">{item.desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">GBP vs Website: Mana yang Lebih Penting?</h2>
            <p>Keduanya saling melengkapi dan sama pentingnya. GBP membantu Anda ditemukan secara lokal di Maps, sementara website memberikan informasi lengkap dan membangun kepercayaan lebih dalam. Idealnya, keduanya bekerja bersama — GBP membawa pengunjung, website mengkonversi mereka menjadi pelanggan.</p>
          </section>

          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 text-center mt-10">
            <h3 className="text-white text-xl font-bold mb-2">Butuh Bantuan Optimasi SEO Lokal?</h3>
            <p className="text-gray-400 text-sm mb-6">Tim NataSEO siap membantu bisnis Anda tampil di Google Maps dan pencarian lokal Yogyakarta.</p>
            <button
              onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300) }}
              className="px-7 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
            >
              Konsultasi Gratis Sekarang
            </button>
          </div>
          <RelatedArticles currentSlug="/artikel/cara-daftar-google-business-profile" />
        </div>
      </article>

      <div className="border-t border-gray-100 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NataSEO®. All rights reserved.
      </div>
    </div>
  )
}
