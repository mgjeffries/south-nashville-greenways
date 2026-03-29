export interface BlogPostLink {
  label: string
  url: string
}

export type BlogPostContent =
  | string
  | { type: 'callout'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string; isHeroImage?: boolean; includeOnCoverCard?: boolean }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'image-comparison'; left: { src: string; alt: string }; right: { src: string; alt: string }; caption?: string }
  | { type: 'paragraph-with-link'; text: string; linkText: string; url: string }
  | { type: 'markdown'; text: string }

export interface PageUpdate {
  date: string
  description: string
}

export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  summary: string
  content: BlogPostContent[]
  links?: BlogPostLink[]
  pageUpdates?: PageUpdate[]
}

import antiochNolensvilleFatality from './posts/antioch-nolensville-fatality.ts'
import eastThompson from './posts/east-thompson.ts'
import antiochPike from './posts/antioch-pike.ts'
import thompson2026 from './posts/thompson-2026.ts'

export const blogPosts: BlogPost[] = [
  antiochNolensvilleFatality,
  eastThompson,
  antiochPike,
  thompson2026,
]
