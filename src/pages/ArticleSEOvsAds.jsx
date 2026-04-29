import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import Logo from '../components/Logo'

export default function ArticleSEOvsAds() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'SEO vs Google Ads: Mana yang Lebih Baik untuk Bisnis Anda? | NataSEO'
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
            <Tag size={11} /> SEO
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Calendar size={11} /> 29 April 2026</span>
          <span className="flex items-center gap-1 text-gray-400 text-xs"><Clock size={11} /> 5 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark-800 leading-tight mb-6">
          SEO vs Google Ads: Mana yang Lebih Baik untuk Bisnis Anda?
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-10 border-l-4 border-teal-400 pl-4">
          SEO atau Google Ads? Ini adalah pertanyaan yang sering dilontarkan pemilik bisnis ketika ingin meningkatkan visibilitas online. Jawabannya bukan mana yang lebih baik — tapi mana yang lebih tepat untuk situasi bisnis Anda saat ini.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-4">Perbandingan Langsung: SEO vs Google Ads</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-bold text-dark-800 rounded-tl-xl">Aspek</th>
                    <th className="text-left p-3 font-bold text-teal-600">SEO</th>
                    <th className="text-left p-3 font-bold text-gold-600 rounded-tr-xl">Google Ads</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Biaya', 'Waktu & tenaga (jangka panjang)', 'Bayar per klik (langsung)'],
                    ['Hasil', '3–6 bulan pertama', 'Langsung setelah aktif'],
                    ['Durasi', 'Bertahan lama meski tidak aktif', 'Berhenti saat budget habis'],
                    ['Kepercayaan', 'Lebih dipercaya pengguna', 'Label "Ad" mengurangi trust'],
                    ['ROI jangka panjang', 'Sangat tinggi', 'Bergantung budget terus'],
                    ['Cocok untuk', 'Pertumbuhan organik berkelanjutan', 'Promosi cepat & seasonal'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 font-medium text-dark-800">{row[0]}</td>
                      <td className="p-3 text-gray-600">{row[1]}</td>
                      <td className="p-3 text-gray-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Kapan Pilih SEO?</h2>
            <p>SEO adalah pilihan tepat jika:</p>
            <ul className="mt-3 space-y-2">
              {[
                'Anda membangun bisnis untuk jangka panjang dan ingin traffic yang tidak bergantung pada budget iklan',
                'Anda bergerak di industri dengan biaya iklan yang mahal (properti, hukum, kesehatan, keuangan)',
                'Anda ingin membangun otoritas dan kepercayaan brand secara organik',
                'Anda memiliki konten berkualitas yang bisa menarik pengunjung secara konsisten',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Kapan Pilih Google Ads?</h2>
            <p>Google Ads lebih cocok jika:</p>
            <ul className="mt-3 space-y-2">
              {[
                'Anda butuh hasil cepat — misalnya untuk produk baru atau promo terbatas',
                'Anda sedang menunggu SEO mulai menghasilkan (Ads bisa mengisi gap tersebut)',
                'Anda ingin menjangkau audience yang sangat spesifik dengan targeting detail',
                'Bisnis Anda bersifat musiman dan butuh boost di waktu tertentu',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gold-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Strategi Terbaik: Kombinasi Keduanya</h2>
            <p>Untuk bisnis yang ingin tumbuh optimal, kombinasi SEO dan Google Ads adalah strategi paling efektif:</p>
            <div className="mt-4 p-5 bg-teal-50 rounded-2xl">
              <p className="font-bold text-dark-800 mb-2">Strategi yang Direkomendasikan:</p>
              <ol className="space-y-2">
                {[
                  'Jalankan Google Ads untuk mendapat traffic dan penjualan cepat di awal',
                  'Secara paralel, bangun SEO untuk traffic organik jangka panjang',
                  'Setelah 6 bulan, SEO mulai menghasilkan — kurangi budget Ads secara bertahap',
                  'Jangka panjang: SEO menjadi sumber traffic utama dengan biaya jauh lebih rendah',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-teal-500 font-bold flex-shrink-0">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-800 mb-3">Kesimpulan</h2>
            <p>Tidak ada jawaban universal. Namun untuk kebanyakan bisnis di Indonesia yang ingin pertumbuhan berkelanjutan dengan ROI terbaik — <strong>SEO adalah investasi yang tidak bisa diabaikan</strong>. Google Ads bisa menjadi pelengkap yang powerful, bukan pengganti.</p>
          </section>

          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 text-center mt-10">
            <h3 className="text-white text-xl font-bold mb-2">Bingung Harus Mulai dari Mana?</h3>
            <p className="text-gray-400 text-sm mb-6">Konsultasikan strategi digital marketing bisnis Anda dengan tim NataSEO. Gratis, tanpa komitmen.</p>
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
