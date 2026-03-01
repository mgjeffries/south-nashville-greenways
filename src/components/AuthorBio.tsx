import type { AuthorBio as AuthorBioType } from '../data/authors.ts'

export default function AuthorBio({ author }: { author: AuthorBioType }) {
  return (
    <div className="author-bio">
      <img
        className="author-bio-avatar"
        src={author.avatar}
        alt={author.name}
      />
      <div className="author-bio-info">
        <h3>{author.name}</h3>
        <p>{author.about}</p>
        <a href={`mailto:${author.email}`}>{author.email}</a>
      </div>
    </div>
  )
}
