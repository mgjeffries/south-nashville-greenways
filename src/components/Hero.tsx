export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>South Nashville Deserves Safe Greenways</h1>
        <p>Let's build dedicated walking and biking paths that connect our community—more than just paint on dangerous highways</p>
        <div>
          <button className="cta-button" onClick={() => scrollTo('take-action')}>Take Action Now</button>
          <button className="cta-button secondary" onClick={() => scrollTo('why')}>Learn More</button>
        </div>
      </div>
    </div>
  )
}
