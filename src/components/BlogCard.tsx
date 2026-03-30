import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blogPosts'

export default function BlogCard({ slug, title, date, content, summary }: BlogPost) {
  const allImages = content.filter((item): item is { type: 'image'; src: string; alt: string; includeOnCoverCard?: boolean } =>
    typeof item === 'object' && item.type === 'image'
  )
  const cardImages = allImages.filter((img) => img.includeOnCoverCard)
  if (cardImages.length === 0 && allImages.length > 0) cardImages.push(allImages[0])
  return (
    <Link to={`/blog/${slug}`} className="blog-card-link">
      <article className="blog-card">
        <div className="blog-card-image">
          {cardImages.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
        <div className="blog-card-content">
          <time className="blog-card-date">{date}</time>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
      </article>
    </Link>
  )
}
