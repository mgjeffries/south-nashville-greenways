import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.tsx'
import Footer from './components/Footer.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import BlogPostPage from './pages/BlogPostPages.tsx'
import EventsPage from './pages/EventsPage.tsx'
import { usePageTracking } from './hooks/usePageTracking.ts'

function App() {
  usePageTracking()

  const isTestingEnvironment = window.location.hostname !== 'south-nashville-greenways.org'

  return (
    <>
      <ScrollToTop />
      <Nav />
      {isTestingEnvironment && (
        <div style={{ background: '#fde047', color: '#713f12', textAlign: 'center', padding: '8px', fontSize: '0.875rem', fontWeight: 500 }}>
          This is a testing environment
        </div>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
