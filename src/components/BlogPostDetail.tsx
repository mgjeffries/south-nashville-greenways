import { Link } from 'react-router-dom'
import Lightbox from './Lightbox.tsx'
import AuthorBio from './AuthorBio.tsx'
import { blogPosts, type BlogPostContent } from '../data/blogPosts.ts'
import { authors } from '../data/authors.ts'

function renderContent(item: BlogPostContent, i: number, images: { src: string; alt: string }[]) {
  if (typeof item === 'string') {
    return <p key={i} className="post-body">{item}</p>
  }
  if (item.type === 'callout') {
    return <blockquote key={i} className="post-callout">{item.text}</blockquote>
  }
  const image = images[item.imageIndex]
  return (
    <Lightbox key={i} src={image.src} alt={image.alt} caption={item.caption}>
      <img className="post-hero-image" src={image.src} alt={image.alt} />
    </Lightbox>
  )
}

export default function BlogPostDetail({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug)!

  return (
    <>
      <div className="about-hero">
        <div className="container">
          <h1>{post.title}</h1>
          <p className="post-byline">By {authors[post.author].name} · <time>{post.date}</time></p>
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
          <Lightbox src={post.images[0].src} alt={post.images[0].alt} caption={post.heroCaption}>
            <img
              className="post-hero-image"
              src={post.images[0].src}
              alt={post.images[0].alt}
            />
          </Lightbox>

          {post.content.map((item, i) => renderContent(item, i, post.images))}

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

          <AuthorBio author={authors[post.author]} />
        </div>
      </div>
    </>
  )
}
