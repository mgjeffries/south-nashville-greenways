import AboutHero from '../components/AboutHero.tsx'
import Carousel from '../components/Carousel.tsx'
import { aboutSlides } from '../data/carouselSlides.ts'

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <div className="section">
        <div className="container">
          <div className="about-text" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
            <h2>Our Story</h2>
            <p>South Nashville deserves a connected network of greenways where families can ride safely, where neighbors can leave their house without a car, and where our community can come together in person. This page, this organization, this vision—it's all just getting started.
            If you believe in creating better, safer, more connected spaces for cycling in South Nashville, I'd love for you to be part of this. Whether you're a lifelong cyclist or someone who's just curious about what greenways could mean for our community, there's a place for you here.
            Let's build this together.</p>
            <p>If you want to connect, reach out to me at gib.jeffries@gmail.com</p>
          </div>

          <Carousel slides={aboutSlides} />
        </div>
      </div>
    </>
  )
}
