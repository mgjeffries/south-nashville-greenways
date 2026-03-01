import BlogCard from '../components/BlogCard.tsx'
import { blogPosts } from '../data/blogPosts.ts'

export default function ProjectsPage() {
  return (
    <>
      <div className="about-hero">
        <div className="container">
          <h1>Current Projects</h1>
          <p>See what's happening in South Nashville and get involved.</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
