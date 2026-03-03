import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blogPosts'

export default function BlogCard({ slug, title, date, images, summary }: BlogPost) {
  const cardImages = images.filter((img) => img.includeOnCoverCard)
  if (cardImages.length === 0) cardImages.push(images[0])
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
