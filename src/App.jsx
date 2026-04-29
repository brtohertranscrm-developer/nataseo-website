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
import ArticleSEO from './pages/ArticleSEO'
import ArticleWeb from './pages/ArticleWeb'
import ArticleContent from './pages/ArticleContent'
import ArticleSoftware from './pages/ArticleSoftware'
import ArticleGBP from './pages/ArticleGBP'
import ArticleSEOvsAds from './pages/ArticleSEOvsAds'
import ArticleHargaSEO from './pages/ArticleHargaSEO'

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

export default function App() {
  return (
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
  )
}
