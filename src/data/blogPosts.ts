export interface BlogPost {
  slug: string
  title: string
  date: string
  imageSrc: string
  imageAlt: string
  summary: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'antioch-pike',
    title: 'Antioch Pike Gets a Colorful New Path',
    date: 'February 22, 2026',
    imageSrc: '/images/blog/2026-02-22-antioch-pike.jpg',
    imageAlt:
      'A vibrant painted mural path along Antioch Pike featuring colorful floral designs',
    summary:
      'A new painted path along Antioch Pike is bringing color and life to the neighborhood. Head out and experience the beautiful mural artwork while enjoying a walk or ride through South Nashville.',
  },
]
