import AboutHero from "../components/AboutHero.tsx";
import Carousel from "../components/Carousel.tsx";
import { aboutSlides } from "../data/carouselSlides.ts";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <div className="section">
        <div className="container">
          <div
            className="about-text"
            style={{ maxWidth: "800px", margin: "0 auto 50px" }}
          >
            <p>
              Gib and Erin started the site in February 2026. Erin commutes to
              work by bike, and we both like to ride around our city. We both
              have other careers, and we’re advocating for safer infrastructure
              because we want it for ourselves and our neighbors. Gib manages
              the website and Erin organizes the group rides.
            </p>
            <p>
              If you want to connect, reach out to Gib at gib.jeffries@gmail.com
            </p>
          </div>

          <Carousel slides={aboutSlides} />
        </div>
      </div>
    </>
  );
}
