import type { BlogPost } from "../blogPosts.ts";

const post: BlogPost = {
  slug: "antioch-nolensville-fatality",
  title: "Pedestrian Killed in South Nashville",
  author: "gib-jeffries",
  date: "March 9, 2026",
  images: [
    {
      src: "/images/blog/antioch-nolensville-fatality/scene.png",
      alt: "View of the Antioch Pike and Nolensville Pike intersection where a pedestrian was killed",
      includeOnCoverCard: true,
    },
    {
      src: "/images/blog/antioch-nolensville-fatality/crosswalk.png",
      alt: "The crosswalk markings at the intersection of Antioch Pike and Nolensville Pike are mostly missing",
    },
    {
      src: "/images/blog/antioch-nolensville-fatality/overhead.png",
      alt: "Overhead view from Google Maps showing a painted median",
    },
    {
      src: "/images/blog/antioch-nolensville-fatality/patch.png",
      alt: "A patch has replaced the leading edge of the painted median on Antioch Pike",
    },
    {
      src: "/images/blog/antioch-nolensville-fatality/median.png",
      alt: "The painted median on Antioch Pike is missing in sections",
    },
    {
      src: "/images/blog/antioch-nolensville-fatality/new-design-concept.png",
      alt: "New design concept by NDOT and Civic Design Center",
    },
    {
      src: "/images/blog/antioch-nolensville-fatality/2026-03-14-repaving.JPG",
      alt: "Repaving work at the Antioch Pike and Nolensville Pike intersection",
    },
    {
        src: "/images/blog/antioch-nolensville-fatality/delineator-installation.JPG",
        alt: "Crew installing delineators",
    },
    {
        src: "/images/blog/antioch-nolensville-fatality/delieneators-installed.JPG",
        alt: "5 delineators installed",
    },
    {
        src: "/images/blog/antioch-nolensville-fatality/03-25-missing-crosswalks-and-median.JPG",
        alt: "Crosswalks and median are still missing after repaving",
    },
  ],
  summary:
    "A pedestrian was struck and killed on Antioch Pike on February 20th. A visit to the intersection reveals missing crosswalk markings and an eroded painted median that need urgent repair.",
  content: [
    "A pedestrian was struck and killed by a vehicle on Antioch Pike on February 20th.  This location is tragically just past where the current tactical urbanism installation ends. Not knowing this had occurred, I biked through the intersection two days later while recording my ride.",
    { type: "image", imageIndex: 1 },
    "As I approached the intersection from Nolensville Pike turing East, I noticed that the painted crosswalks are mostly missing. I would like to see it re-painted to increase awareness of pedestrians.",
    { type: "image", imageIndex: 2, caption: "Older image from google maps" },
    "An overhead image from Google Maps captured in 2026 shows a painted median reducing the traffic turning onto Antioch Pike from Nolensville down to one lane. But when I turned onto the road it seems that this painted median has already been eroded since the Google image was taken. A patch has replaced the leading edge of the median, and the following portion is also missing.",
    { type: "image", imageIndex: 3, caption: "Patch covers painted median" },
    { type: "image", imageIndex: 4, caption: "Still no sign of the median" },
    "Without this median to narrow the road, my perception as a driver, or even a cyclist is that this is an area where it is safe to go fast, when in fact there is a pedestrian crossing between a large apartment complex and a local grocery store just a few feet ahead. I think that it’s important to repaint this median in the short term, and in the long term I’d like to see a permanent median installed. The new design concepts by NDOT and the Civic Design Center show a permanent median at this intersection. I would love to see this installed as soon as possible.",
    { type: "image", imageIndex: 5, caption: "New design concept by NDOT and Civic Design Center" },
    {
      type: "callout",
      text: "I’m calling on NDOT and the Vision Zero Advisory Committee to act quickly: repaint the crosswalk markings at this intersection, restore the painted median, and install vertical delineators to make it visible. A pedestrian has already lost their life here. These are fast, high-impact fixes that can prevent the next tragedy.",
    },
    { type: "heading", level: 2, text: "March 14th: Repaving in Progress!" },
    "While walking by the area on Saturday March 14th I noticed construction vehicles getting ready for work. They are repaving the area that had been patched, and will have to re-paint the Antioch Pike portion of the intersection. I was told that the contractor doing the work doesn’t get paid until work is complete, so I’m hopeful that the paint will be applied soon!",
    { type: "image", imageIndex: 6, caption: "Repaving work at the intersection on March 14th" },
    { type: "heading", level: 2, text: "March 25th: First Delineators Installed!" },
    "A crew installed 5 delineators at the intersection in under 30 minutes. It's great to see progress being made here.",
    { type: "image", imageIndex: 7, caption: "Delineators installed at the intersection on March 25th" },
    { type: "image", imageIndex: 8, caption: "The 5 delineators installed" },
    { type: "heading", level: 2, text: "Remaining issues" },
    "The painted median and crosswalks are still missing from the area that has been repaved, and the 5 delineators that were installed leave a car-sized gap in the the pedestrian refuge area.",
    { type: "image", imageIndex: 9, caption: "The crosswalks and median are still missing after repaving" },
    { type: "callout", text: "We need NDOT to repaint the missing median and crosswalks ASAP" },
  ],
  links: [
    {
      label: "Police Media Release",
      url: 'https://www.nashville.gov/departments/police/news/77-year-old-man-fatally-struck-fridays-hit-and-run-antioch-pike',
    },
    {
      label: "Vehicle Crash Map",
      url: 'https://www.nashville.gov/departments/police/data-dashboard/vehicle-crashes-map',
    },
    {
      label: 'Design Concept by Civic Design Center and NDOT for next phase of Antioch Pike',
      url: 'https://platform.remix.com/project/0988282d/scenario/4420e749-ca2c-4921-9ef7-e9365d43c5ea',
    },
  ],
  pageUpdates: [
    {
      date: 'March 10, 9:38 am',
      description: 'Added new design concept image',
    },
    {
      date: 'March 14',
      description: 'Added image of repaving work at the intersection',
    },
    {
      date: 'March 29',
      description: 'Added images of new delineators that were installed on March 25th.',
    },
  ]
};

export default post;
