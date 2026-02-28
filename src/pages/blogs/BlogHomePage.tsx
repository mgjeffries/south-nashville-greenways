import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blogPosts'

// Source images from Civic Design Center documentation
const HERO_IMAGE =
  'https://images.squarespace-cdn.com/content/v1/5ec82e4c1b61ca5861c6d51c/d55913d3-5ae3-428f-9954-b7d31950c711/17-1L6A7222.jpg'

const CARD_IMAGES: Record<string, string> = {
  'open-streets-antioch-pike':
    'https://images.squarespace-cdn.com/content/v1/5ec82e4c1b61ca5861c6d51c/a6b1450c-478f-4f65-bf00-20b9dc3fba96/Photo+Nov+05+2024%2C+1+43+03+PM.jpg',
  'antioch-pike-boulevard-vision':
    'https://images.squarespace-cdn.com/content/v1/5ec82e4c1b61ca5861c6d51c/4dbe4385-fdb0-4b80-b510-cda49bd7a7e4/V3.png',
}

export default function BlogHomePage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    const elements = pageRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const featured = blogPosts.find((p) => p.featured)
  const otherPosts = blogPosts.filter((p) => !p.featured)

  return (
    <div ref={pageRef}>
      {/* Masthead */}
      <div className="blog-masthead">
        <div className="blog-masthead-content">
          <div className="blog-masthead-title">Greenway</div>
          <div className="blog-masthead-subtitle">Stories</div>
          <div className="blog-masthead-rule">
            <span className="blog-masthead-ornament">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.5 0 3-.3 4.3-.9" />
                <path d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                <path d="M12 7v10" />
                <path d="M15 17l3-3 3 3" />
                <path d="M18 22V14" />
              </svg>
            </span>
          </div>
          <div className="blog-masthead-tagline">
            Dispatches from South Nashville's fight for safer streets
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-content">
        {/* Featured Article */}
        {featured && (
          <div className="blog-featured">
            <div className="blog-section-label reveal">Latest</div>
            <Link to={`/blog/${featured.slug}`} className="blog-featured-card reveal">
              <div className="blog-featured-image">
                <img src={HERO_IMAGE} alt="Community gathering on Antioch Pike" />
                <div className="blog-featured-image-overlay" />
              </div>
              <div className="blog-featured-body" style={{ background: featured.heroGradient }}>
                <span className="blog-featured-category" style={{ background: featured.categoryColor }}>
                  {featured.category}
                </span>
                <h2 className="blog-featured-title">{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.excerpt}</p>
                <div className="blog-featured-meta">
                  <span>{featured.date}</span>
                  <span className="blog-featured-meta-divider" />
                  <span>{featured.readTime}</span>
                </div>
                <div className="blog-featured-read">
                  Read the full story <span className="blog-featured-read-arrow">&rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* More Stories Grid */}
        {otherPosts.length > 0 && (
          <>
            <div className="blog-section-label reveal" style={{ maxWidth: 1100, margin: '0 auto 28px', padding: '0 20px' }}>
              More Stories
            </div>
            <div className="blog-grid">
              {otherPosts.map((post, i) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.slug}
                  className={`blog-card reveal reveal-delay-${i + 1}`}
                >
                  <div className="blog-card-image">
                    {CARD_IMAGES[post.slug] ? (
                      <>
                        <img src={CARD_IMAGES[post.slug]} alt={post.title} />
                        <div
                          className="blog-card-gradient"
                          style={{ background: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)` }}
                        />
                      </>
                    ) : (
                      <div className="blog-card-gradient" style={{ background: post.heroGradient }} />
                    )}
                    <span className="blog-card-category" style={{ background: post.categoryColor }}>
                      {post.category}
                    </span>
                  </div>
                  <div className="blog-card-body">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-meta">
                      <span>{post.date}</span>
                      <span className="blog-card-meta-dot" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* CTA Section */}
        <div className="blog-cta-section reveal">
          <div className="blog-cta-card">
            <div>
              <div className="blog-cta-label">Why We Write</div>
              <h2 className="blog-cta-title">Every Story Is a Step Toward Safer Streets</h2>
              <p className="blog-cta-text">
                We document, investigate, and share because change begins with awareness.
                South Nashville deserves infrastructure that protects every person—whether
                they walk, bike, or roll. Join the movement.
              </p>
            </div>
            <Link to="/#take-action" className="blog-cta-button">
              Take Action <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
