import type { BlogPost } from '../blogPosts.ts'

const post: BlogPost = {
  slug: 'a-better-bridge',
  title: 'A Better Bridge',
  author: 'gib-jeffries',
  date: 'November 17, 2026',
  summary:
    'Nolensville’s bridges should connect people safely, not just carry cars. See why the upcoming redesign is an opportunity to create something better.',
  content: [
    {
        type: 'image-comparison',
        left:{ src: '/images/blog/a-better-bridge/nolensville-pike-at-440-before.png', alt: 'Before' },
        right: { src: '/images/blog/a-better-bridge/nolensville-pike-at-440-rendering.png', alt: 'After' },
        caption: 'Current bridge vs AI Rendering. Slide the divider to see the difference.',
        includeOnCoverCard: true,
    },
    'Have you ever looked up directions, and the route is a big horseshoe? Chances are you were blocked by a railroad or an interstate. These big pieces of infrastructure cut up the city and create bottlenecks. Anyone who wants to pass over has to find a bridge, and when the bridges are built with only cars in mind that creates a problem for people walking and biking.',
    'This stretch of Nolensville is being redesigned by Nashville’s Choose How You Move program, which means that now is the perfect time to improve our bridge. Let’s take this from hellscape to dreamscape.',
    {
      type: 'callout',
      text: 'Got a different idea of what you’d like to see? [Send me an email](mailto:gib.jeffries@gmail.com)! I’d love to see it!',
    },
  ],
}

export default post
