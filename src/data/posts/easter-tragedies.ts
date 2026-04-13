import type { BlogPost } from "../blogPosts.ts";

const post: BlogPost = {
  slug: "easter-tragedies",
  title: "The Easter Tragedies",
  author: "gib-jeffries",
  date: "April 12, 2026",
  summary:
    "Two hit-and-run crashes near Lafayette Street and Fairfield Ave claimed a young couple's lives on Easter Sunday, and left another man in a deep coma. The road's poor lighting and confusing speed signage demand urgent attention.",
  content: [
    { type: "image", src: "/images/blog/2026-easter-tragedies/cover.JPG", alt: "Lafayette Street near Fairfield Ave where two hit-and-run crashes occurred", isHeroImage: true, includeOnCoverCard: true },
    "On Friday March 27th, a week before Easter, a pedestrian was crossing Lafayette Street near Fairfield Ave, and was hit by a black Mercedes SUV. The driver fled the scene in the vehicle, and the pedestrian was taken to the hospital with life threatening injuries. The initial police report did not name the pedestrian.",
    {
      type: "paragraph-with-link",
      text: "MNPD Media Release: Pedestrian Critically Injured in Hit-and-Run Crash on Lafayette Street",
      linkText: "Read the MNPD media release",
      url: "https://www.nashville.gov/departments/police/news/pedestrian-critically-injured-hit-and-run-crash-lafayette-street",
    },
    "An article by News Channel 5 on April 7th identified the victim of the hit-and-run as Ronnie \"Tony\" Wilson, and reports that he was in a deep coma from those injuries. I don't have any updates about his condition, but I pray for healing and recovery.",
    {
      type: "paragraph-with-link",
      text: "News Channel 5: Nashville family demands justice after devastating hit-and-run leaves 41-year-old man in a deep coma",
      linkText: "Read the News Channel 5 article",
      url: "https://www.newschannel5.com/news/nashville-family-demands-justice-after-devastating-hit-and-run-leaves-41-year-old-man-in-a-deep-coma",
    },
    "On Easter Sunday, April 5th, I biked out to the site where the crash occurred to take photos of the road and see if there were any immediate safety needs I could identify. While I was there I encountered two news crews, covering a crash that happened early Easter morning. It was another hit-and-run, and it resulted in the death of a young couple, Yulonda Partham and Kanon Oldham.",
    "As I'm writing this, I'm still in shock thinking about the pace of the tragic loss of life at this intersection. I stood and listened on the street as the news crews interviewed people who had known these victims. You can read and hear their interviews here:",
    {
      type: "paragraph-with-link",
      text: "News3LV: Easter tragedy — families question safety of Nashville corridor after 2 fatally struck",
      linkText: "Read the News3LV article",
      url: "https://news3lv.com/news/nation-world/easter-tragedy-families-question-safety-of-nashville-corridor-after-2-fatally-struck",
    },
    { type: "heading", level: 2, text: "Crashes on This Road Happen Frequently" },
    { type: "image", src: "/images/blog/2026-easter-tragedies/panorama.JPG", alt: "Panoramic view of Lafayette Street near Fairfield Ave", caption: "Lafayette Street near Fairfield Ave" },
    "Here's a map of crash reports in this area in just the last 6 months. Crashes are frequent, and often result in serious injury or death.",
    { type: "image", src: "/images/blog/2026-easter-tragedies/crash-data.png", alt: "Map of crash reports near Lafayette Street and Fairfield Ave in the last 6 months", caption: "Crash reports near Lafayette Street and Fairfield Ave (last 6 months)" },
    {
      type: "paragraph-with-link",
      text: "MNPD Vehicle Crashes Map",
      linkText: "View the crash map",
      url: "https://www.nashville.gov/departments/police/data-dashboard/vehicle-crashes-map",
    },
    { type: "heading", level: 2, text: "Slow Roads Save Lives" },
    "When tragedies like this occur, our human instinct is to try to find someone to blame. People sometimes blame pedestrians for how they cross the road, or they blame drivers, or the police, the city, the state. I think that if you're looking to find fault, and you dig deep enough you can usually find it at all levels, but that doesn't prevent the next death.",
    "To prevent the next fatal crash, we need to look at a way to change the system. This is an intersection in the largest city in Tennessee that is heavily used by both cars and pedestrians. If we lower the speed that cars move on the road, the frequency and severity of these crashes will decrease.",
    "Let's not waste time fighting over whose fault it is that these accidents occurred. Let's all work together to lower the speed of vehicles at this intersection and prevent the next fatal crash.",
    { type: "heading", level: 2, text: "Issues with the Road" },
    "I haven't been to this intersection at night, but I heard both Sterling Wright and Angela Scales mention that it is poorly lit in their interviews with the news crews. The two most recent crashes occurred during early morning when there would not have been much sunlight. Installing overhead lighting could increase the safety of this area.",
    { type: "image", src: "/images/blog/2026-easter-tragedies/add-lights.JPG", alt: "Lafayette Street near Fairfield Ave showing lack of overhead lighting", caption: "Overhead lighting is lacking in this stretch of Lafayette Street" },
    { type: "heading", level: 3, text: "Confusing Speed Signage" },
    "On a large road connecting between a major city and suburbs I expect there to be a lot of speed limit signage. I expect the speed limit to be low in the city, and gradually rise as it exits into the country. I took a drive on this road looking for speed limit signage, and I found it to be very confusing. I saw a lot of signage about school zones, some with different speeds with a flashing indicator, some with a different speed \"when children present\", but I didn't see a single speed limit sign within 2000 feet of the intersection in either direction.",
    "I don't know what the intended speed limit is here, but I would recommend setting it to a consistent low number, such as 30 MPH, rather than having it at a high number like 40 MPH, and then expecting drivers to drop to 15 MPH if they see children present.",
    {
      type: "callout",
      text: "What are your thoughts on this intersection? Do you want to see improvements on this road? Send me an email, or attend the Vision Zero Advisory Committee to speak about this.",
    },
  ],
  links: [
    {
      label: "MNPD: Pedestrian Critically Injured in Hit-and-Run Crash on Lafayette Street",
      url: "https://www.nashville.gov/departments/police/news/pedestrian-critically-injured-hit-and-run-crash-lafayette-street",
    },
    {
      label: "News Channel 5: Nashville family demands justice after hit-and-run leaves man in deep coma",
      url: "https://www.newschannel5.com/news/nashville-family-demands-justice-after-devastating-hit-and-run-leaves-41-year-old-man-in-a-deep-coma",
    },
    {
      label: "News3LV: Easter tragedy — families question safety of Nashville corridor after 2 fatally struck",
      url: "https://news3lv.com/news/nation-world/easter-tragedy-families-question-safety-of-nashville-corridor-after-2-fatally-struck",
    },
    {
      label: "MNPD Vehicle Crashes Map",
      url: "https://www.nashville.gov/departments/police/data-dashboard/vehicle-crashes-map",
    },
  ],
  showScrollButton: true,
};

export default post;
