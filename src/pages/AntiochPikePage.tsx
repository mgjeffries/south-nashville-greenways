import Lightbox from '../components/Lightbox.tsx'
import MapOverlay from '../components/MapOverlay.tsx'
import { blogPosts } from '../data/blogPosts.ts'

const post = blogPosts.find((p) => p.slug === 'antioch-pike')!

export default function AntiochPikePage() {
  return (
    <>
      <div className="about-hero">
        <div className="container">
          <h1>{post.title}</h1>
          <time>{post.date}</time>
        </div>
      </div>

      <div className="section">
        <div className="container post-detail">
          <Lightbox src={post.imageSrc} alt={post.imageAlt}>
            <img
              className="post-hero-image"
              src={post.imageSrc}
              alt={post.imageAlt}
            />
          </Lightbox>

          <p className="post-body">{post.summary}</p>

          <Lightbox
            src="/images/blog/2026-02-28-antioch-pike-project-extents.png"
            alt="Zoomed-in map showing the Antioch Pike project extents"
          >
            <MapOverlay
              backgroundSrc="/images/blog/2026-02-28-south-nashville-large.png"
              backgroundAlt="Map of south Nashville showing the project area in regional context"
              foregroundSrc="/images/blog/2026-02-28-antioch-pike-project-extents.png"
              foregroundAlt="Zoomed-in map showing the Antioch Pike project extents"
              foregroundPosition="top"
            />
          </Lightbox>

          {post.links && post.links.length > 0 && (
            <section className="learn-more">
              <h2>Learn More</h2>
              <ul className="blog-card-links">
                {post.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </>
  )
}
