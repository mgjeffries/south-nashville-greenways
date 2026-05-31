import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowDown, ArrowUp, ChevronRight, ExternalLink, Link2 } from 'lucide-react'
import Lightbox from './Lightbox.tsx'
import AuthorBio from './AuthorBio.tsx'
import Carousel from './Carousel.tsx'
import ImageComparison from './ImageComparison.tsx'
import PageUpdateBanner from './PageUpdateBanner.tsx'
import { blogPosts, type BlogPostContent } from '../data/blogPosts.ts'
import { authors } from '../data/authors.ts'

type Heading = { type: 'heading'; level: 2 | 3; text: string }

function headingId(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function scrollToId(e: React.MouseEvent, id: string) {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function StickyToc({ headings, activeId }: { headings: Heading[]; activeId: string }) {
  return (
    <nav className="post-toc-sidebar">
      <p className="post-toc-title">Contents</p>
      <ol>
        {headings.map((h) => {
          const id = headingId(h.text)
          return (
            <li
              key={h.text}
              className={[h.level === 3 ? 'post-toc-sub' : '', activeId === id ? 'active' : ''].filter(Boolean).join(' ') || undefined}
            >
              <a href={`#${id}`} onClick={(e) => scrollToId(e, id)}>{h.text}</a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

function renderContent(item: BlogPostContent, i: number, onHeadingClick: (id: string) => void, allContent: BlogPostContent[]) {
  if (typeof item === 'string') {
    return <p key={i} className="post-body">{item}</p>
  }
  if (item.type === 'callout') {
    return <blockquote key={i} className="post-callout"><ReactMarkdown>{item.text}</ReactMarkdown></blockquote>
  }
  if (item.type === 'heading') {
    const Tag = `h${item.level}` as 'h2' | 'h3'
    const id = headingId(item.text)
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
  if (item.type === 'tableOfContents') {
    const headings = allContent.filter((c): c is Heading => typeof c === 'object' && c.type === 'heading')
    return (
      <nav key={i} className="post-toc-inline">
        <p className="post-toc-title">Contents</p>
        <ol>
          {headings.map((h, j) => {
            const id = headingId(h.text)
            return (
              <li key={j} className={h.level === 3 ? 'post-toc-sub' : undefined}>
                <a href={`#${id}`} onClick={(e) => scrollToId(e, id)}>{h.text}</a>
              </li>
            )
          })}
        </ol>
      </nav>
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
  if (item.type === 'iframe') {
    return (
      <div key={i} className="post-iframe-wrapper">
        <iframe
          src={item.src}
          width={item.width ?? 640}
          height={item.height ?? 480}
          title={item.title ?? 'Embedded map'}
          style={{ border: 0, maxWidth: '100%' }}
          allowFullScreen
        />
      </div>
    )
  }
  if (item.type === 'carousel') {
    return (
      <div key={i} className="post-carousel">
        <Carousel slides={item.images} />
        {item.caption && <p className="post-image-caption">{item.caption}</p>}
      </div>
    )
  }
  if (item.type === 'image' && item.isHeroImage) {
    return null
  }
  if (item.type === 'image' && item.wide) {
    return (
      <Lightbox key={i} src={item.src} alt={item.alt} caption={item.caption} sourceUrl={item.sourceUrl}>
        <img className="post-hero-image post-wide-image" src={item.src} alt={item.alt} />
      </Lightbox>
    )
  }
  if (item.type === 'image') {
    return (
      <Lightbox key={i} src={item.src} alt={item.alt} caption={item.caption} sourceUrl={item.sourceUrl}>
        <img className="post-hero-image" src={item.src} alt={item.alt} />
      </Lightbox>
    )
  }
  return null
}

function ScrollButton() {
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      setAtBottom(scrolled > total * 0.6)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleClick() {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
    }
  }

  return (
    <button className="scroll-nav-button" onClick={handleClick} aria-label={atBottom ? 'Scroll to top' : 'Scroll to bottom'}>
      {atBottom ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
    </button>
  )
}

export default function BlogPostDetail({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug)!
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeId, setActiveId] = useState('')
  const headingsRef = useRef<Heading[]>([])

  const headings = post.content.filter((c): c is Heading => typeof c === 'object' && c.type === 'heading')
  headingsRef.current = headings
  const hasToc = post.content.some((c) => typeof c === 'object' && c.type === 'tableOfContents')

  useEffect(() => {
    const section = searchParams.get('section')
    if (section) {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  useEffect(() => {
    if (!hasToc || headings.length === 0) return

    function onScroll() {
      let active = ''
      for (const h of headingsRef.current) {
        const el = document.getElementById(headingId(h.text))
        if (el && el.getBoundingClientRect().top <= 100) {
          active = headingId(h.text)
        }
      }
      setActiveId(active)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [hasToc])

  function handleHeadingClick(id: string) {
    setSearchParams({ section: id }, { replace: true })
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const heroImage = post.content.find(
    (item) => typeof item === 'object' && item.type === 'image' && item.isHeroImage
  ) as { src: string; alt: string; caption?: string } | undefined

  const contentBody = (
    <>
      {heroImage && (
        <Lightbox src={heroImage.src} alt={heroImage.alt} caption={heroImage.caption}>
          <img className="post-hero-image" src={heroImage.src} alt={heroImage.alt} />
        </Lightbox>
      )}
      {post.content.map((item, i) => renderContent(item, i, handleHeadingClick, post.content))}
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
    </>
  )

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
        {hasToc ? (
          <div className="container post-layout">
            <StickyToc headings={headings} activeId={activeId} />
            <div className="post-detail">{contentBody}</div>
          </div>
        ) : (
          <div className="container post-detail">{contentBody}</div>
        )}
      </div>
      {post.showScrollButton && <ScrollButton />}
    </>
  )
}
