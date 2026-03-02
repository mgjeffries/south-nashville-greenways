export interface BlogPostLink {
  label: string
  url: string
}

export interface BlogPostImage {
  src: string
  alt: string
}

export type BlogPostContent =
  | string
  | { type: 'callout'; text: string }
  | { type: 'image'; imageIndex: number; caption?: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'image-comparison'; leftImageIndex: number; rightImageIndex: number; caption?: string }
  | { type: 'paragraph-with-link'; text: string; linkText: string; url: string }

export interface PageUpdate {
  date: string
  description: string
}

export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  images: BlogPostImage[]
  heroCaption?: string
  summary: string
  content: BlogPostContent[]
  links?: BlogPostLink[]
  pageUpdates?: PageUpdate[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'east-thompson',
    title: 'NDOT Plans to Add Bikeways to East Thompson',
    author: 'gib-jeffries',
    date: 'March 1, 2026',
    images: [
      {
        src: '/images/blog/2026-03-01-east-thompson-design-concept.png',
        alt: 'Design concept for East Thompson Lane bikeways',
      },
      {
        src: '/images/blog/2026-03-01-east-thompson-intersection.png',
        alt: 'Map showing traffic accidents at the Thompson and East Thompson intersection',
      },
    ],
    heroCaption: 'NDOT design concept for East Thompson Lane',
    summary:
      'NDOT is making plans to enhance safety and mobility on East Thompson Lane. The design concept features a bike lane and sidewalks, but key questions remain about protective barriers and the dangerous Thompson intersection.',
    content: [
      "When you think of greenways in South Nashville, East Thompson Lane is probably one of the last roads you think of. It's wiiiiiiiiiiiiiiiiide! There are many places without bike lanes or sidewalks, and it intersects with two similar roads. It feels dangerous, and the data from NDOT's vision zero program show that it has been the site of many crashes, some of them fatal.",
      'But all of that may be about to change. NDOT is making plans to enhance safety and mobility on this road. The October 2024 design concept features a bike lane, and sidewalks in some locations.',
      'I was able to participate in the April 2024 community ride, without any of the proposed enhancements, and the temporary road demonstration in June of 2025 where NDOT set out traffic cones to represent the design concept. It was much more pleasant to ride on as a cyclist with the traffic cones reserving space for me on the road.',
      'I do have some open questions about the design concept:',
      { type: 'callout', text: 'Will there be protective barriers such as concrete curbs to protect pedestrians from cars? The design concept says "Where feasible, consider depaving the buffer area to potentially include landscaping, concrete curb, etc." To me, that will make a difference between whether this installation feels safe to use.' },
      { type: 'image', imageIndex: 1, caption: 'Traffic accident data at the Thompson and East Thompson intersection. Source: Nashville Open Data' },
      { type: 'callout', text: 'The intersection of Thompson and East Thompson is labeled "Intersection Design By Others" in this concept. The data shows that this intersection is a hotspot of crashes, some of them fatal. My challenge to the community is to not let this intersection stay unfinished.' },
    ],
    links: [
      {
        label: "NDOT's Project Site",
        url: 'https://www.nashville.gov/departments/transportation/projects/complete-streets/east-thompson-lane-multimodal-project',
      },
      {
        label: 'Traffic Accidents Data (Nashville Open Data)',
        url: 'https://datanashvillegov-nashville.hub.arcgis.com/datasets/Nashville::traffic-accidents/explore?location=36.109528%2C-86.727783%2C18&style=Number_of_Fatalities',
      },
    ],
  },
  {
    slug: 'antioch-pike',
    title: 'Antioch Pike has a Colorful New Bikeway',
    author: 'gib-jeffries',
    date: 'February 28, 2026',
    images: [
      {
        src: '/images/blog/2026-02-22-antioch-pike.jpg',
        alt: 'A vibrant painted mural path along Antioch Pike featuring colorful floral designs',
      },
      {
        src: '/images/blog/2026-02-28-antioch-pike-project-extents.png',
        alt: 'Map showing the Antioch Pike project extents',
      },
      {
        src: '/images/blog/2026-03-01-antioch-pike-large-buffers-concept.png',
        alt: 'Design concept with wide buffers between the bike lane and traffic',
      },
      {
        src: '/images/blog/2026-03-01-antioch-pike-center-median-concept.png',
        alt: 'Design concept with a center median',
      },
    ],
    heroCaption: 'Painted mural bikeway along Antioch Pike',
    summary:
      'A new painted path along Antioch Pike is bringing color and life to the neighborhood. Head out and experience the beautiful mural artwork while enjoying a walk or ride through South Nashville.',
    content: [
      'If you haven\'t already taken a stroll or bike ride down Antioch Pike I highly recommend it! The new murals are fun to see, and the new bike lanes have transformed the road. The installation shown was built by NDOT as a temporary Tactical Urbanism project, and they are currently making plans for a permanent installation. Try it out so you can give your feedback to NDOT, and take part in making South Nashville a great place to walk and bike!',
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
    ],
    pageUpdates: [
      {
        date: 'March 2, 2026',
        description: 'Added design concept comparison images and community input information for the next phase of Antioch Pike.',
      },
    ],
  },
]
