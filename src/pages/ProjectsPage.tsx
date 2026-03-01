import BlogCard from '../components/BlogCard.tsx'
import MapOverlay from '../components/MapOverlay.tsx'
import { blogPosts } from '../data/blogPosts.ts'

export default function ProjectsPage() {
  return (
    <>
      <div className="about-hero">
        <div className="container">
          <h1>Current Projects</h1>
          <p>See what's happening in South Nashville and get involved.</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <MapOverlay
            backgroundSrc="/images/blog/2026-02-28-south-nashville-large.png"
            backgroundAlt="Map of south Nashville showing the project area in regional context"
            foregroundSrc="/images/blog/2026-02-28-antioch-pike-project-extents.png"
            foregroundAlt="Zoomed-in map showing the Antioch Pike project extents"
            foregroundPosition="bottom"
          />
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
