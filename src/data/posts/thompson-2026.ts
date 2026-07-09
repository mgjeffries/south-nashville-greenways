import type { BlogPost } from '../blogPosts.ts'

const post: BlogPost = {
  slug: 'thompson-2026',
  title: 'Improvements are coming to Thompson Lane this year!',
  author: 'gib-jeffries',
  date: 'March 30, 2026',
  summary:
    'Protected bike lanes are coming to Thompson Lane between Nolensville and Powell this year, with a longer-term Complete Streets project also in the pipeline for South Nashville.',
  content: [
    { type: "markdown", text: "There has been a lot of community engagement around the East Thompson Lane Multimodal project, and I'm excited for that, but construction on that project is not scheduled for this year. What **is** scheduled for work this year is a protected bike lane on Thompson between Nolensville and Powell!" },
    { type: 'image', src: '/images/blog/thompson-2026/20206-03-29-neighborhood-improvement-tracker.png', alt: 'Nashville neighborhood improvement tracker showing Thompson Lane project', includeOnCoverCard: true, caption: 'Nashville neighborhood improvement tracker', sourceUrl: 'https://experience.arcgis.com/experience/d7026b3c1ab1465396bc58531d668f8a/page/Page?views=Filter#data_s=id%3AdataSource_1-192d5ca6b51-layer-10%3A1146' },
    "I've been in discussion with NDOT Public information coordinator Brendan Scully about this project. Here's how he describes it:",
    {
      type: 'markdown',
      text: '> On Thompson Lane, we are installing and improving the bike lanes on Thompson between Powell Avenue (near the I-65 overpass) and Nolensville Pike in conjunction with a TDOT paving project. We don\'t have installation dates yet but do know the work will be completed this year. Improvements include:\n>\n> 1. Continuous bike lanes\n> 2. Flex-post delineators and buffers where pavement space allows\n> 3. Green paint at major conflict zones\n> 4. Intersection improvements to narrow turning radii and increase pedestrian/bicycle visibility at E Iris, Eugenia, Landers, Elizabeth, and Grandview\n>\n> This is an opportunity to implement some important safety elements through our regular bikeway funding on Thompson Lane and continually improve those elements with the CHYM Complete Street project to follow in the coming years.',
    },
    "In that last line, Brendan mentions that there is a Thompson Lane Complete Streets project! This is big news for South Nashville! It's an ambitious, multi-year plan to make these streets support all modes of travel.",
    { type: 'image', src: '/images/blog/thompson-2026/2026-03-29-chym-map.png', alt: 'CHYM Complete Streets project tracker', caption: 'Choose How You Move Tracker', sourceUrl: 'https://experience.arcgis.com/experience/758b1d6becb44127a9d4edec0f722b76/page/Choose-Your-Council-District' },
    "I find this project especially exciting because this route is on my way to a lot of local businesses: grocery store, home goods, rock climbing gym, and my wife's workplace. It also currently features some of the most impassable terrain, such as this stretch with cars driving at lethal speeds, no shoulder, and a rocky ditch.",
    { type: 'image', src: '/images/blog/thompson-2026/ditch.png', alt: 'Ditch along Thompson Lane', caption: 'Current state of Thompson Lane' },
    { type: 'callout', text: "What are your thoughts on this project? If you'd like to be involved in providing community support and feedback for this, please reach out using my email below!" },
    "I reached out to TDOT in June and confirmed that the project is on schedule, and obtained a copy of the designs. I've linked them here with their permission.",
    {type: 'image', src: '/images/blog/thompson-2026/2026-07-08-tdot-plans.png', alt: 'New plans for Thompson Lane', caption: 'New plans for Thompson Lane', sourceUrl: "https://drive.google.com/file/d/1J8O2oxOMmZ1EHkocLHBu5c-szvLcSscp/view?usp=sharing" },
  ],
  links: [
    { label: "TDOT's designs for the upgraded road", url: "https://drive.google.com/file/d/1J8O2oxOMmZ1EHkocLHBu5c-szvLcSscp/view?usp=sharing"},
    { label: 'Neighborhood Improvement Tracker', url: 'https://experience.arcgis.com/experience/d7026b3c1ab1465396bc58531d668f8a/page/Page?views=Filter#data_s=id%3AdataSource_1-192d5ca6b51-layer-10%3A1146' },
    { label: 'Choose How You Move Live Map', url: 'https://experience.arcgis.com/experience/758b1d6becb44127a9d4edec0f722b76/page/Choose-Your-Council-District' },
  ],
  pageUpdates: [
    {
        date: '2026-07-08',
        description: "TDOT has shared the designs for the project, and I've linked them above. The project is still on schedule for this year."
    }
  ]
}

export default post
