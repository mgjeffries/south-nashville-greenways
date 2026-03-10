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
  ],
  summary:
    "A pedestrian was struck and killed on Antioch Pike on February 20th. A visit to the intersection reveals missing crosswalk markings and an eroded painted median that need urgent repair.",
  content: [
    "A pedestrian was struck and killed by a vehicle on Antioch Pike on February 20th.  This location tragically just past where the current tactical urbanism installation ends. Not knowing this had occurred, I biked through the intersection two days later while recording my ride.",
    { type: "image", imageIndex: 1 },
    "As I approached the intersection from Nolensville Pike heading East, I noticed that the painted crosswalks are mostly missing. I would like to see it re-painted to increase awareness of pedestrians.",
    { type: "image", imageIndex: 2, caption: "Google maps 2026" },
    "An overhead image from Google Maps captured in 2026 shows a painted median reducing the traffic turning onto Antioch Pike from Nolensville down to one lane. But when I turned onto the road it seems that this painted median has already been eroded since the Google image was taken. A patch has replaced the leading edge of the median, and the following portion is also missing.",
    { type: "image", imageIndex: 3, caption: "Patch covers painted median" },
    { type: "image", imageIndex: 4, caption: "Still no sign of the median" },
    "Without this median to narrow the road, my perception as a driver, or even a cyclist is that this is an area where it is safe to go fast, when in fact there is a pedestrian crossing between a large apartment complex and a local grocery store just a few feet ahead. I think that it’s important to repaint this median in the short term, and in the long term I’d like to see a permanent median installed in this intersection. ",
    {
      type: "callout",
      text: "I’m calling on NDOT and the Vision Zero Advisory Committee to act quickly: repaint the crosswalk markings at this intersection, restore the painted median, and install vertical delineators to make it permanent and visible. A pedestrian has already lost their life here. These are low-cost, high-impact fixes that can prevent the next tragedy.",
    },
  ],
};

export default post;
