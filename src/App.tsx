import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.tsx'
import Footer from './components/Footer.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import AntiochPikePage from './pages/AntiochPikePage.tsx'
import AntiochNolensFatalityPage from './pages/AntiochNolensFatalityPage.tsx'
import EastThompsonPage from './pages/EastThompsonPage.tsx'
import EventsPage from './pages/EventsPage.tsx'
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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/antioch-pike" element={<AntiochPikePage />} />
        <Route path="/blog/antioch-nolensville-fatality" element={<AntiochNolensFatalityPage />} />
        <Route path="/blog/east-thompson" element={<EastThompsonPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
