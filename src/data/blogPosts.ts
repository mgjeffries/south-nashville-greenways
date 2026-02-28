export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  categoryColor: string
  heroGradient: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'antioch-pike-safety-crisis',
    title: '116 Lives Lost: The Hidden Crisis on Nashville\u2019s Most Dangerous Roads',
    excerpt:
      'Nashville lost 116 people to traffic violence in 2024\u2014two lives every single week. The data reveals a pattern that demands action, and Antioch Pike sits at the center of it.',
    date: 'February 15, 2025',
    readTime: '8 min read',
    category: 'INVESTIGATION',
    categoryColor: '#991b1b',
    heroGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    featured: true,
  },
  {
    slug: 'open-streets-antioch-pike',
    title: 'The Day a Thousand Neighbors Took Back Their Street',
    excerpt:
      'On a warm November afternoon, Antioch Pike fell silent\u2014no speeding cars, no close calls. Instead: Mariachi music, children on bicycles, and a neighborhood reimagining what their street could be.',
    date: 'January 28, 2025',
    readTime: '6 min read',
    category: 'COMMUNITY',
    categoryColor: '#2d5016',
    heroGradient: 'linear-gradient(135deg, #2d5016 0%, #4a7c28 50%, #6b9b37 100%)',
  },
  {
    slug: 'antioch-pike-boulevard-vision',
    title: 'From Dangerous Pike to Welcoming Boulevard',
    excerpt:
      'A community-designed vision is transforming one of South Nashville\u2019s most dangerous corridors into a tree-lined boulevard with protected bike lanes and safe crossings for all.',
    date: 'January 10, 2025',
    readTime: '7 min read',
    category: 'VISION',
    categoryColor: '#7c3aed',
    heroGradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d6a4f 50%, #40916c 100%)',
  },
]
