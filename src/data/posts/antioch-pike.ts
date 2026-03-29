import type { BlogPost } from '../blogPosts.ts'

const post: BlogPost = {
  slug: 'antioch-pike',
  title: 'Antioch Pike has a Colorful New Bikeway',
  author: 'gib-jeffries',
  date: 'February 28, 2026',
  images: [
    {
      src: '/images/blog/antioch-pike/mural.jpg',
      alt: 'A vibrant painted mural path along Antioch Pike featuring colorful floral designs',
      includeOnCoverCard: true,
      isHeroImage: true,
    },
    {
      src: '/images/blog/antioch-pike/project-extents.png',
      alt: 'Map showing the Antioch Pike project extents',
      includeOnCoverCard: true,
    },
    {
      src: '/images/blog/antioch-pike/large-buffers-concept.png',
      alt: 'Design concept with wide buffers between the bike lane and traffic',
    },
    {
      src: '/images/blog/antioch-pike/center-median-concept.png',
      alt: 'Design concept with a center median',
    },
  ],
  heroCaption: 'Painted mural bikeway along Antioch Pike',
  summary:
    'A new painted path along Antioch Pike is bringing color and life to the neighborhood. Head out and experience the beautiful mural artwork while enjoying a walk or ride through South Nashville.',
  content: [
    "If you haven't already taken a stroll or bike ride down Antioch Pike I highly recommend it! The new murals are fun to see, and the new bike lanes have transformed the road. The installation shown was built by NDOT as a temporary Tactical Urbanism project, and they are currently making plans for a permanent installation. Try it out so you can give your feedback to NDOT, and take part in making South Nashville a great place to walk and bike!",
    { type: 'image', imageIndex: 1, caption: 'Map of current bikeway' },
    { type: 'heading', level: 2, text: "Help Shape What's Next" },
    {
      type: 'paragraph-with-link',
      text: "NDOT and the Civic Design Center are seeking community input on design concepts for the next phase of their design. One version features wide buffers between the bike lane and traffic, similar to the current installation, but with upgraded materials, and the other design features a center median. Both designs incorporate trees and grass. You can leave a digital comment anywhere on the map:",
      linkText: 'Leave a comment on the design map',
      url: 'https://platform.remix.com/project/0988282d/scenario/4420e749-ca2c-4921-9ef7-e9365d43c5ea',
    },
    { type: 'image-comparison', leftImageIndex: 2, rightImageIndex: 3, caption: 'Comparison of two proposed plans' },
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
    {
      label: 'Comment on the new design concepts',
      url: 'https://platform.remix.com/project/0988282d/scenario/4420e749-ca2c-4921-9ef7-e9365d43c5ea',
    },
  ],
  pageUpdates: [
    {
      date: 'March 2, 2026',
      description: 'Added new design concepts and link for community feedback',
    },
  ],
}

export default post
