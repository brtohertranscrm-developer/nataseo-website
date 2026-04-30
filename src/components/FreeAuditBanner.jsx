import { ArrowRight, Search, Activity, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function FreeAuditBanner() {
  const { lang } = useLanguage()
  
  const content = {
    id: {
      badge: 'Baru',
      title: 'Cek Kesehatan Website Anda Sekarang, Gratis!',
      desc: 'Dapatkan laporan cepat tentang performa, SEO dasar, dan seberapa baik website Anda bersaing di halaman pencarian Google.',
      btn: 'Mulai Audit Gratis',
    },
    en: {
      badge: 'New',
      title: 'Check Your Website Health Now, For Free!',
      desc: 'Get a quick report on performance, basic SEO, and how well your website competes on Google search pages.',
      btn: 'Start Free Audit',
    }
  }

  const t = content[lang] || content.id

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-900 to-teal-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10">
            <Globe size={300} />
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 opacity-10 text-gold-500">
            <Activity size={200} />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-gold-500 text-dark-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 bg-dark-900 rounded-full animate-pulse" />
                {t.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                {t.title}
              </h2>
              <p className="text-teal-100 text-lg">
                {t.desc}
              </p>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-auto">
              <Link 
                to="/free-seo-audit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold rounded-xl transition-all duration-200 shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-105 group text-lg"
              >
                <Search size={22} className="group-hover:animate-bounce" />
                {t.btn}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
