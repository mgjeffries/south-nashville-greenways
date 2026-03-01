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
        <div className="container">
          <p>{post.summary}</p>

          <MapOverlay
            backgroundSrc="/images/blog/2026-02-28-south-nashville-large.png"
            backgroundAlt="Map of south Nashville showing the project area in regional context"
            foregroundSrc="/images/blog/2026-02-28-antioch-pike-project-extents.png"
            foregroundAlt="Zoomed-in map showing the Antioch Pike project extents"
            foregroundPosition="top"
          />

          {post.links && post.links.length > 0 && (
            <ul className="blog-card-links">
              {post.links.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
