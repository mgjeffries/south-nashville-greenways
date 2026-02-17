import { useState } from 'react'

interface CarouselProps {
  slides: Array<{ src: string; alt: string }>
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const goTo = (index: number) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length)
  }

  return (
    <div className="carousel">
      <div className="carousel-track">
        {slides.map((slide, i) => (
          <div key={i} className={`carousel-slide${i === current ? ' active' : ''}`}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button className="carousel-btn carousel-btn-prev" aria-label="Previous slide" onClick={() => goTo(current - 1)}>&#10094;</button>
      <button className="carousel-btn carousel-btn-next" aria-label="Next slide" onClick={() => goTo(current + 1)}>&#10095;</button>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
