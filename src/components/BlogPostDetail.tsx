import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, useSearchParams } from 'react-router-dom'
import { ChevronRight, ExternalLink, Link2 } from 'lucide-react'
import Lightbox from './Lightbox.tsx'
import AuthorBio from './AuthorBio.tsx'
import ImageComparison from './ImageComparison.tsx'
import PageUpdateBanner from './PageUpdateBanner.tsx'
import { blogPosts, type BlogPostContent } from '../data/blogPosts.ts'
import { authors } from '../data/authors.ts'

function renderContent(item: BlogPostContent, i: number, onHeadingClick: (id: string) => void) {
  if (typeof item === 'string') {
    return <p key={i} className="post-body">{item}</p>
  }
  if (item.type === 'callout') {
    return <blockquote key={i} className="post-callout">{item.text}</blockquote>
  }
  if (item.type === 'heading') {
    const Tag = `h${item.level}` as 'h2' | 'h3'
    const id = item.text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    function handleAnchorClick(e: React.MouseEvent) {
      e.preventDefault()
      onHeadingClick(id)
    }
    return (
      <Tag key={i} id={id} className="post-heading">
        <a href={`#${id}`} className="post-heading-anchor" aria-label="Link to section" onClick={handleAnchorClick}>
          <Link2 size={18} />
        </a>
        {item.text}
      </Tag>
    )
  }
  if (item.type === 'paragraph-with-link') {
    return (
      <p key={i} className="post-body">
        {item.text}{' '}
        <a href={item.url} target="_blank" rel="noopener noreferrer">{item.linkText}</a>
      </p>
    )
  }
  if (item.type === 'image-comparison') {
    return (
      <ImageComparison
        key={i}
        leftSrc={item.left.src}
        leftAlt={item.left.alt}
        rightSrc={item.right.src}
        rightAlt={item.right.alt}
        caption={item.caption}
      />
    )
  }
  if (item.type === 'markdown') {
    return <div key={i} className="post-body"><ReactMarkdown>{item.text}</ReactMarkdown></div>
  }
  if (item.type === 'image' && item.isHeroImage) {
    return null
  }
  return (
    <Lightbox key={i} src={item.src} alt={item.alt} caption={item.caption}>
      <img className="post-hero-image" src={item.src} alt={item.alt} />
    </Lightbox>
  )
}

export default function BlogPostDetail({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug)!
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const section = searchParams.get('section')
    if (section) {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  function handleHeadingClick(id: string) {
    setSearchParams({ section: id }, { replace: true })
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

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
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span>{post.title}</span>
        </div>
      </nav>

      <div className="section">
        <div className="container post-detail">
          {(() => {
            const heroImage = post.content.find(item => typeof item === 'object' && item.type === 'image' && item.isHeroImage) as { src: string; alt: string; caption?: string } | undefined
            return heroImage && (
              <Lightbox src={heroImage.src} alt={heroImage.alt} caption={heroImage.caption}>
                <img className="post-hero-image" src={heroImage.src} alt={heroImage.alt} />
              </Lightbox>
            )
          })()}

          {post.content.map((item, i) => renderContent(item, i, handleHeadingClick))}

          {post.links && post.links.length > 0 && (
            <section className="learn-more">
              <h2>Learn More</h2>
              <ul className="blog-card-links">
                {post.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} <ExternalLink size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <AuthorBio author={authors[post.author]} />
          {post.pageUpdates && <PageUpdateBanner updates={post.pageUpdates} />}
        </div>
      </div>
    </>
  )
}
