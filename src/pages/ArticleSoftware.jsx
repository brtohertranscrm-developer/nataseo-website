import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import Logo from '../components/Logo'

export default function ArticleSoftware() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Jasa Software Development Yogyakarta: Solusi Sistem untuk Bisnis Anda | NataSEO'
  }, [])

  return (
    <div className="min-h-screen bg-white">
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
            <Tag size={11} /> Software
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Calendar size={11} /> 29 April 2026</span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Clock size={11} /> 5 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark-800 leading-tight mb-6">
          Jasa Software Development Yogyakarta: Solusi Sistem Custom untuk Bisnis Anda
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-10 border-l-4 border-teal-400 pl-4">
          Proses bisnis yang manual dan tidak efisien bisa menghambat pertumbuhan. Jasa software development Yogyakarta dari NataSEO hadir untuk membangun sistem yang benar-benar sesuai dengan kebutuhan unik bisnis Anda.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Kapan Bisnis Anda Butuh Software Custom?</h2>
            <p>Banyak bisnis yang tumbuh akhirnya menghadapi masalah yang sama: software off-the-shelf (siap pakai) tidak lagi cukup untuk menangani kompleksitas operasional mereka. Anda mungkin butuh software custom jika:</p>
            <ul className="mt-4 space-y-2">
              {[
                'Tim Anda menghabiskan waktu berjam-jam untuk pekerjaan yang seharusnya bisa diotomatisasi',
                'Data bisnis tersebar di banyak spreadsheet dan sulit dikelola',
                'Software yang ada tidak bisa diintegrasikan satu sama lain',
                'Proses pemesanan, inventori, atau laporan masih dilakukan secara manual',
                'Anda butuh fitur spesifik yang tidak tersedia di software yang ada di pasaran',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Jenis Software yang Bisa Kami Bangun</h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                { title: 'Sistem Manajemen Bisnis', desc: 'Kelola inventori, pesanan, dan laporan keuangan dalam satu dashboard.' },
                { title: 'Aplikasi Web & Portal', desc: 'Platform listing, booking, marketplace, atau portal pelanggan sesuai industri Anda.' },
                { title: 'Sistem HR & Payroll', desc: 'Otomatisasi absensi, penggajian, dan penilaian performa karyawan.' },
                { title: 'CRM (Customer Relationship)', desc: 'Kelola prospek, follow-up, dan riwayat interaksi pelanggan dengan mudah.' },
                { title: 'Integrasi Sistem', desc: 'Hubungkan software yang sudah ada agar data mengalir otomatis tanpa input manual.' },
                { title: 'Dashboard & Laporan', desc: 'Visualisasi data bisnis real-time untuk pengambilan keputusan yang lebih cepat.' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl">
                  <div className="font-bold text-dark-800 text-sm mb-1">{item.title}</div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Proses Pengembangan Software di NataSEO</h2>
            <ol className="space-y-4 mt-4">
              {[
                { num: '01', title: 'Konsultasi & Analisis Kebutuhan', desc: 'Kami duduk bersama Anda untuk memahami alur bisnis, pain point, dan tujuan yang ingin dicapai.' },
                { num: '02', title: 'Desain Sistem & Prototype', desc: 'Kami buat wireframe dan prototype yang bisa Anda lihat dan komentari sebelum pengembangan dimulai.' },
                { num: '03', title: 'Pengembangan Bertahap', desc: 'Pembangunan dilakukan secara iteratif dengan update progress rutin, sehingga Anda selalu tahu perkembangannya.' },
                { num: '04', title: 'Testing & Quality Assurance', desc: 'Setiap fitur diuji secara menyeluruh sebelum diserahkan untuk memastikan bebas bug.' },
                { num: '05', title: 'Deployment & Training', desc: 'Kami bantu proses peluncuran dan melatih tim Anda untuk menggunakan sistem baru.' },
                { num: '06', title: 'Maintenance & Support', desc: 'Kami tetap ada setelah launch untuk memastikan sistem berjalan lancar dan siap membantu jika ada kendala.' },
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
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Teknologi yang Kami Gunakan</h2>
            <p>Kami menggunakan teknologi modern yang terbukti handal, scalable, dan mudah di-maintain jangka panjang — termasuk React, Node.js, dan database yang disesuaikan dengan kebutuhan skala bisnis Anda.</p>
          </section>

          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 text-center mt-10">
            <h3 className="text-white text-xl font-bold mb-2">Punya Ide Sistem yang Ingin Dibangun?</h3>
            <p className="text-gray-400 text-sm mb-6">Ceritakan kebutuhan bisnis Anda. Kami bantu carikan solusi yang tepat dan efisien.</p>
            <button
              onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300) }}
              className="px-7 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
            >
              Diskusi Kebutuhan Anda
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
