import type { BlogPost } from '../blogPosts.ts'

const post: BlogPost = {
  slug: 'nolensville-road-greenways',
  title: 'Nolensville Road Greenways are Closer than You Think!',
  author: 'gib-jeffries',
  date: 'May 31, 2026',
  summary:
    "We've got traffic jams! We've got crackle and pop exhausts! We've got drag racing! But even with all that we have an opportunity to add safe, protected paths for walking and biking on Nolensville road. The type of path you can walk on with your family as you head from your favorite local shop to Coleman Park!",
  content: [
    { type: "tableOfContents" },
    { type: 'heading', level: 2, text: 'Oh, Really?' },
    "The stretch of Nolensville pike has some challenges for walking and biking. There are sidewalks, which is great, but they are close to the highway. They are great for getting from one business to the next, but not very pleasant for an extended walk. Also, there are no bike lanes on this section of the road, and although a tiny sign declares \"NOTICE BIKE MAY USE FULL LANE\" it doesn't feel safe to bike here.",
    { type: 'image', src: '/images/blog/nolensville-road-greenways/bike-may-use-full-lane.png', alt: 'Sign reading "Notice Bike May Use Full Lane" on Nolensville Pike' },
    { type: 'heading', level: 2, text: 'Yes! Really!' },
    "Let's get back to the part where I said that a greenway on this section of road is closer than you think! Here's what I mean by that: although Nolensville Pike itself is dangerous for walking and biking, The alley on the west side is actually very protected. It passes by a local coffee shop, bakery, restaurants, churches, the Walgreens and the Krispy Kreme! Although it's not currently set up as a walking path, it could easily become one with a little bit of care. If the community and city work together we could de-pave some of the asphalt to create green space. Having a mixed use path with greenspace would encourage patrons to park a little further from their destination and enjoy a short walk.",
    { type: 'image', src: '/images/blog/nolensville-road-greenways/conceptual-rendering-with-park.png', alt: 'Conceptual rendering of a greenway with park space along the west side alley of Nolensville Pike' },
    { type: 'heading', level: 2, text: 'East Side, West Side' },
    "On the West side of the street the situation is slightly different, but the same principle applies. Coleman park, with the community center and library are a great starting point or destination on the greenway. There is even the start of a connecting pathway into the neighborhoods, although it's damaged, and in need of repair. Moving north from Coleman park there are a number of allies that don't fully connect, but with collaboration between the land owners, business owners, community leaders and city I'm confident that we could find a way to join these isolated allies together into a beautiful path. Businesses would benefit from neighbors and patrons and staff being able to safely walk to their shops. Imagine taking a break for lunch, walking out the back door and strolling down a beautiful path.",
    { type: 'image-comparison', left: { src: '/images/blog/nolensville-road-greenways/compare-left.png', alt: 'Current state of the alley on the east side of Nolensville Pike' }, right: { src: '/images/blog/nolensville-road-greenways/compare-right.png', alt: 'Conceptual rendering of a greenway on the east side of Nolensville Pike' } },
    { type: 'heading', level: 2, text: 'Friendly Debate' },
    "Check out the interactive map and see what you think! If you click on the 📷 icons you can see a conecptual rendering at that location, as well as current image for comparison. Would you use a path like this if it existed? Do you like it? Do you hate it? Do you own property or a business that would be affected by this for better or worse?",
    { type: 'heading', level: 3, text: 'Interactive Map' },
    { type: 'iframe', src: 'https://www.google.com/maps/d/u/0/embed?mid=1_3ZQLIKoZxqcnogii7rtehGfVXHL0ww&ehbc=2E312F&noprof=1', width: 640, height: 480, title: 'Nolensville Road Greenways Map' },
    { type: 'callout', text: "I'd love to hear your thoughts about this pitch! Please send me an email with your feedback, or even just a note saying that you'd like to hear more updates!" },
  ],
}

export default post
