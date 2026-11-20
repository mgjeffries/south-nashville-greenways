import type { BlogPost } from '../blogPosts.ts'

const post: BlogPost = {
  slug: 'a-better-bridge',
  title: 'Nolensville Road over 440',
  author: 'gib-jeffries',
  date: 'November 19, 2026',
  summary:
    "Nolensville Road's bridges should connect people safely, not just carry cars. See why the upcoming redesign is an opportunity to create something better.",
  content: [
    {
        type: 'image-comparison',
        left:{ src: '/images/blog/a-better-bridge/nolensville-pike-at-440-before.png', alt: 'Before' },
        right: { src: '/images/blog/a-better-bridge/nolensville-pike-at-440-rendering.png', alt: 'After' },
        caption: 'Current bridge vs AI Rendering. Slide the divider to see the difference.',
        includeOnCoverCard: true,
    },
    '3 Pedestrians have been killed at this bridge in the last 10 years',
    {
      type: 'callout',
      text: 'Got a different idea of what you’d like to see? [Send me an email](mailto:gib.jeffries@gmail.com)! I’d love to see it!',
    },
  ],
  links: [
    { label: 'Nash Fatal Crash - an interactive map of crash data', url: 'https://www.nashfatalcrash.com/'}
  ]
}

export default post
