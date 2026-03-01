import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.tsx'
import Footer from './components/Footer.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ProjectsPage from './pages/ProjectsPage.tsx'
import AntiochPikePage from './pages/AntiochPikePage.tsx'
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
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/antioch-pike" element={<AntiochPikePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
