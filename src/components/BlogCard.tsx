import type { BlogPost } from '../data/blogPosts'

export default function BlogCard({ title, date, imageSrc, imageAlt, summary, links }: BlogPost) {
  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="blog-card-content">
        <time className="blog-card-date">{date}</time>
        <h3>{title}</h3>
        <p>{summary}</p>
        {links && links.length > 0 && (
          <ul className="blog-card-links">
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
