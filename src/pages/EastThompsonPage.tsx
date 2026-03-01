import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox.tsx'
import { blogPosts } from '../data/blogPosts.ts'

const post = blogPosts.find((p) => p.slug === 'east-thompson')!

export default function EastThompsonPage() {
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
          <Lightbox src={post.images[0].src} alt={post.images[0].alt} caption="NDOT design concept for East Thompson Lane">
            <img
              className="post-hero-image"
              src={post.images[0].src}
              alt={post.images[0].alt}
            />
          </Lightbox>

          {post.content.slice(0, 5).map((paragraph, i) => (
            <p key={i} className="post-body">{paragraph}</p>
          ))}

          <Lightbox
            src={post.images[1].src}
            alt={post.images[1].alt}
            caption="Traffic accident data at the Thompson and East Thompson intersection. Source: Nashville Open Data"
          >
            <img
              className="post-hero-image"
              src={post.images[1].src}
              alt={post.images[1].alt}
            />
          </Lightbox>

          {post.content.slice(5).map((paragraph, i) => (
            <p key={i} className="post-body">{paragraph}</p>
          ))}

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
