import type { BlogPost } from '../blogPosts.ts'

const post: BlogPost = {
  slug: 'antioch-nolensville-fatality',
  title: 'Pedestrian Killed in South Nashville',
  author: 'gib-jeffries',
  date: 'March 9, 2026',
  images: [
    {
      src: '/images/blog/2026-03-09-antioch-and-nolenville-fatality.png',
      alt: 'View of the Antioch Pike and Nolensville Pike intersection where a pedestrian was killed',
      includeOnCoverCard: true,
    },
    {
      src: '/images/blog/2026-03-09-antioch-and-nolenville-fatality-overhead.png',
      alt: 'Overhead view from Google Maps showing a painted median reducing turning traffic onto Antioch Pike to one lane',
    },
    {
      src: '/images/blog/2026-02-22-antioch-and-nolenville-fatality-patch.png',
      alt: 'A patch has replaced the leading edge of the painted median on Antioch Pike',
    },
    {
      src: '/images/blog/2026-02-22-antioch-and-nolenville-fatality-median.png',
      alt: 'The painted median on Antioch Pike is missing in sections',
    },
  ],
  summary:
    'A pedestrian was struck and killed on Antioch Pike on February 20th. A visit to the intersection reveals missing crosswalk markings and an eroded painted median that need urgent repair.',
  content: [
    'A pedestrian was struck and killed by a vehicle on Antioch Pike on February 20th. Not knowing this had occurred, I biked through the intersection two days later while recording my ride.',
    { type: 'image', imageIndex: 0 },
    'As I approached the intersection from Nolensville Pike heading East, I noticed that the painted crosswalks are mostly missing. I would like to see it re-painted to increase awareness of pedestrians.',
    { type: 'image', imageIndex: 1, caption: 'An overhead image from Google Maps captured in 2026 shows a painted median reducing the traffic turning onto Antioch Pike from Nolensville down to one lane.' },
    'But when I turned onto the road it seems that this painted median has already been eroded since the Google image was taken. A patch has replaced the leading edge of the median, and the following portion is also missing.',
    { type: 'image', imageIndex: 2 },
    { type: 'image', imageIndex: 3 },
    'I hope that Nashville will act quickly to repair these issues and protect people walking and biking in the city.',
  ],
}

export default post
