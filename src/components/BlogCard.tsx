import type { BlogPost } from '../data/blogPosts'

export default function BlogCard({ title, date, imageSrc, imageAlt, summary }: BlogPost) {
  return (
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
  )
}
