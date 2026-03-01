import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox.tsx'
import { blogPosts } from '../data/blogPosts.ts'

const post = blogPosts.find((p) => p.slug === 'antioch-pike')!

export default function AntiochPikePage() {
  return (
    <>
      <div className="about-hero">
        <div className="container">
          <h1>{post.title}</h1>
          <p className="post-byline">By {post.author} · <time>{post.date}</time></p>
        </div>
      </div>

      <nav className="breadcrumbs">
        <div className="container">
          <Link to="/blog">Blog</Link>
          <span className="breadcrumb-separator">/</span>
          <span>{post.title}</span>
        </div>
      </nav>

      <div className="section">
        <div className="container post-detail">
          <Lightbox src={post.imageSrc} alt={post.imageAlt}>
            <img
              className="post-hero-image"
              src={post.imageSrc}
              alt={post.imageAlt}
            />
          </Lightbox>


          {post.content.map((paragraph, i) => (
            <p key={i} className="post-body">{paragraph}</p>
          ))}

          <Lightbox
            src="/images/blog/2026-02-28-antioch-pike-project-extents.png"
            alt="Zoomed-in map showing the Antioch Pike project extents"
            caption="Map of current bikeway"
          >
            <img
              className="post-hero-image"
              src="/images/blog/2026-02-28-antioch-pike-project-extents.png"
              alt="Zoomed-in map showing the Antioch Pike project extents"
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
