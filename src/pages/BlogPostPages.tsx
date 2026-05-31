import { useParams } from 'react-router-dom'
import BlogPostDetail from '../components/BlogPostDetail.tsx'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  return <BlogPostDetail slug={slug!} />
}
