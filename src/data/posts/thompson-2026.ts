import type { BlogPost } from '../blogPosts.ts'

const post: BlogPost = {
  slug: 'thompson-2026',
  title: 'Improvements are coming to Thompson Lane this year!',
  author: 'gib-jeffries',
  date: 'March 29, 2026',
  images: [
    {
      src: '/images/blog/thompson-2026/20206-03-29-neighborhood-improvement-tracker.png',
      alt: 'Nashville neighborhood improvement tracker showing Thompson Lane project',
      includeOnCoverCard: true,
    },
    {
      src: '/images/blog/thompson-2026/2026-03-29-chym-map.png',
      alt: 'CHYM Complete Streets project tracker',
    },
    {
      src: '/images/blog/thompson-2026/ditch.png',
      alt: 'Ditch along Thompson Lane',
    },
  ],
  heroCaption: 'Nashville neighborhood improvement tracker showing Thompson Lane project',
  summary:
    'Protected bike lanes are coming to Thompson Lane between Nolensville and Powell this year, with a longer-term Complete Streets project also in the pipeline for South Nashville.',
  content: [
    "There has been a lot of community engagement around the East Thompson Lane Multimodal project, and I'm excited for that, but construction on that project is not scheduled for this year. What is scheduled for work this year is a protected bike lane on Thompson between Nolensville and Powell!",
    "I've been in discussion with NDOT Public information coordinator Brendan Scully about this project. Here's how he describes it:",
    {
        type: 'markdown',
        text: '> On Thompson Lane, we are installing and improving the bike lanes on Thompson between Powell Avenue (near the I-65 overpass) and Nolensville Pike in conjunction with a TDOT paving project. We don\'t have installation dates yet but do know the work will be completed this year. Improvements include:\n>\n> - Continuous bike lanes\n> - Flex-post delineators and buffers where pavement space allows\n> - Green paint at major conflict zones\n> - Intersection improvements to narrow turning radii and increase pedestrian/bicycle visibility at E Iris, Eugenia, Landers, Elizabeth, and Grandview\n>\n> This is an opportunity to implement some important safety elements through our regular bikeway funding on Thompson Lane and continually improve those elements with the CHYM Complete Street project to follow in the coming years.',
    },
    "In that last line, Brendan mentions that there is a Thompson Lane Complete Streets project! This is big news for South Nashville! It's an ambitious, multi-year plan to make these streets support all modes of travel.",
    { type: 'image', imageIndex: 1, caption: 'Choose How You Move Tracker' },
    "I find this project especially exciting because this route is on my way to a lot of local businesses: grocery store, home goods, rock climbing gym, and my wife's workplace. It also currently features some of the most impassable terrain, such as this stretch with cars driving at lethal speeds, no shoulder, and a rocky ditch.",
    { type: 'image', imageIndex: 2, caption: 'Current state of Thompson Lane' },
    { type: 'callout', text: "I'm delighted to see this project moving forward. My only concern is that I don't want it to get delayed. I would ask that as residents of South Nashville we support and advocate for this project. It requires collaboration between NDOT and TDOT, and I'm sure it will help if they know that the people who live in this area support the project." },
  ],
}

export default post
