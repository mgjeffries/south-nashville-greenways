import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blogPosts'

export default function BlogCard({ slug, title, date, images, summary }: BlogPost) {
  return (
    <Link to={`/blog/${slug}`} className="blog-card-link">
      <article className="blog-card">
        <div className="blog-card-image">
          {images.map((image) => (
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
