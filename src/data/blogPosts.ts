export interface BlogPostLink {
  label: string
  url: string
}

export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  imageSrc: string
  imageAlt: string
  summary: string
  content: string[]
  links?: BlogPostLink[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'antioch-pike',
    title: 'Antioch Pike Has a Colorful New Bikeway',
    author: 'Gib Jeffries',
    date: 'February 28, 2026',
    imageSrc: '/images/blog/2026-02-22-antioch-pike.jpg',
    imageAlt:
      'A vibrant painted mural path along Antioch Pike featuring colorful floral designs',
    summary:
      'A new painted path along Antioch Pike is bringing color and life to the neighborhood. Head out and experience the beautiful mural artwork while enjoying a walk or ride through South Nashville.',
    content: [
      'If you haven’t already taken a stroll or bike ride down Antioch Pike I highly recommend it! The new murals are fun to see, and the new bike lanes have transformed the road. The installation show was built by NDOT as a temporary Tactical Urbanism project, and they are currently making plans for a permanent installation. Try it out so you can give your feedback to NDOT, and take part in making South Nashville a great place to walk and bike!',
    ],
    links: [
      {
        label: "NDOT's Project Site",
        url: 'https://www.nashville.gov/departments/transportation/projects/complete-streets/east-thompson-lane-multimodal-project',
      },
      {
        label: 'Civic Design Center: Transforming Antioch Pike',
        url: 'https://www.civicdesigncenter.org/all-projects-blog/transforming-antioch-pike-a-collaborative-vision-for-a-healthier-safer-corridor',
      },
    ],
  },
]
