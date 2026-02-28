import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.tsx'
import Footer from './components/Footer.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import BlogHomePage from './pages/blogs/BlogHomePage.tsx'
import AntiochPikeSafety from './pages/blogs/AntiochPikeSafety.tsx'
import AntiochPikeCommunity from './pages/blogs/AntiochPikeCommunity.tsx'
import AntiochPikeVision from './pages/blogs/AntiochPikeVision.tsx'
import { usePageTracking } from './hooks/usePageTracking.ts'

function App() {
  usePageTracking()

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogHomePage />} />
        <Route path="/blog/antioch-pike-safety-crisis" element={<AntiochPikeSafety />} />
        <Route path="/blog/open-streets-antioch-pike" element={<AntiochPikeCommunity />} />
        <Route path="/blog/antioch-pike-boulevard-vision" element={<AntiochPikeVision />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
