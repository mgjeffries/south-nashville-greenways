import type { BlogPost } from '../blogPosts.ts'

const post: BlogPost = {
  slug: 'east-thompson',
  title: 'NDOT Plans to Add Bikeways to East Thompson',
  author: 'gib-jeffries',
  date: 'March 1, 2026',
  images: [
    {
      src: '/images/blog/east-thompson/design-concept.png',
      alt: 'Design concept for East Thompson Lane bikeways',
      includeOnCoverCard: true,
      isHeroImage: true,
    },
    {
      src: '/images/blog/east-thompson/intersection.png',
      alt: 'Map showing traffic accidents at the Thompson and East Thompson intersection',
      includeOnCoverCard: true,
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
}

export default post
