import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

interface ArticleLayoutProps {
  slug: string
  title: string
  subtitle: string
  date: string
  readTime: string
  category: string
  categoryColor: string
  heroGradient: string
  heroImageUrl?: string
  heroImageAlt?: string
  children: React.ReactNode
}

function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <figure className="article-image article-image-fallback">
        <div className="article-image-placeholder">{alt}</div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    )
  }

  return (
    <figure className="article-image">
      <img src={src} alt={alt} onError={() => setError(true)} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export { ArticleImage }

export default function ArticleLayout({
  slug,
  title,
  subtitle,
  date,
  readTime,
  category,
  categoryColor,
  heroGradient,
  heroImageUrl,
  heroImageAlt,
  children,
}: ArticleLayoutProps) {
  const [progress, setProgress] = useState(0)
  const articleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = articleRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <div ref={articleRef}>
      {/* Progress Bar */}
      <div className="article-progress">
        <div className="article-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* Hero Section */}
      <div className="article-hero">
        <Link to="/blog" className="blog-back-link">
          <span>&larr;</span> All Stories
        </Link>

        <div className="article-hero-bg">
          {heroImageUrl ? (
            <>
              <img src={heroImageUrl} alt={heroImageAlt || title} />
              <div className="article-hero-overlay" />
            </>
          ) : (
            <div className="article-hero-gradient" style={{ background: heroGradient }} />
          )}
        </div>

        <div className="article-hero-content">
          <span className="article-hero-category" style={{ background: categoryColor }}>
            {category}
          </span>
          <h1 className="article-hero-title">{title}</h1>
          <p className="article-hero-subtitle">{subtitle}</p>
          <div className="article-hero-meta">
            <span>{date}</span>
            <span className="article-hero-meta-dot" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="article-body">
        <div className="article-content">{children}</div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="article-related">
          <div className="article-related-inner">
            <div className="article-related-label">Continue Reading</div>
            <h2 className="article-related-title">More Greenway Stories</h2>
            <div className="article-related-grid">
              {relatedPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                  <div className="blog-card-image">
                    <div className="blog-card-gradient" style={{ background: post.heroGradient }} />
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
          </div>
        </div>
      )}
    </div>
  )
}
