import BlogCard from '../components/BlogCard.tsx'
import { blogPosts } from '../data/blogPosts.ts'

export default function BlogPage() {
  return (
    <>
      <div className="about-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>See what's happening in South Nashville and get involved.</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {[...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
