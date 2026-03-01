import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blogPosts'

export default function BlogCard({ slug, title, date, imageSrc, imageAlt, summary }: BlogPost) {
  return (
    <Link to={`/projects/${slug}`} className="blog-card-link">
      <article className="blog-card">
        <div className="blog-card-image">
          <img src={imageSrc} alt={imageAlt} />
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
