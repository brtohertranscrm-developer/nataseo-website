import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'

const ArticleSEO = lazy(() => import('./pages/ArticleSEO'))
const ArticleWeb = lazy(() => import('./pages/ArticleWeb'))
const ArticleContent = lazy(() => import('./pages/ArticleContent'))
const ArticleSoftware = lazy(() => import('./pages/ArticleSoftware'))
const ArticleGBP = lazy(() => import('./pages/ArticleGBP'))
const ArticleSEOvsAds = lazy(() => import('./pages/ArticleSEOvsAds'))
const ArticleHargaSEO = lazy(() => import('./pages/ArticleHargaSEO'))

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

function ArticleFallback() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<ArticleFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artikel/jasa-seo-yogyakarta" element={<ArticleSEO />} />
        <Route path="/artikel/jasa-pembuatan-website-yogyakarta" element={<ArticleWeb />} />
        <Route path="/artikel/strategi-content-marketing-bisnis-indonesia" element={<ArticleContent />} />
        <Route path="/artikel/jasa-software-development-yogyakarta" element={<ArticleSoftware />} />
        <Route path="/artikel/cara-daftar-google-business-profile" element={<ArticleGBP />} />
        <Route path="/artikel/seo-vs-google-ads" element={<ArticleSEOvsAds />} />
        <Route path="/artikel/biaya-jasa-seo-indonesia" element={<ArticleHargaSEO />} />
      </Routes>
    </Suspense>
  )
}
