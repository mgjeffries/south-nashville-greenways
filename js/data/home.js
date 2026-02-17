export const hero = {
  title: 'South Nashville Deserves Safe Greenways',
  subtitle: "Let's build dedicated walking and biking paths that connect our community—more than just paint on dangerous highways",
  ctas: [
    { text: 'Take Action Now', href: '#take-action', className: 'cta-button' },
    { text: 'Learn More', href: '#why', className: 'cta-button secondary' },
  ],
};

export const problem = {
  title: 'The Problem With Paint',
  bad: {
    heading: '❌ What We Have',
    image: { src: 'images/painted-bike-lanes-v3.png', alt: 'Painted bike lane with no physical separation from traffic' },
    points: [
      'Cars traveling 30+ mph inches away',
      'No physical protection',
      'Unsafe for children and families',
      'Discourages active transportation',
    ],
  },
  good: {
    heading: '✅ What We Need',
    image: { src: 'images/protected-bike-lanes-v3.png', alt: 'Bike/pedestrian lane separated from traffic by grass and trees' },
    points: [
      'Physically separated from traffic',
      'Safe for children, seniors, families',
      'Encourages healthy, active lifestyles',
      'Proven to increase property values',
    ],
  },
};

export const benefits = {
  title: 'Why Separated Greenways Matter',
  subtitle: 'Real greenways transform communities. Here\'s why South Nashville needs them.',
  cards: [
    { icon: '👨‍👩‍👧‍👦', title: 'Family Safety', text: 'Parents can bike with kids. Seniors can walk without fear. Everyone deserves safe routes to parks, schools, and shops.' },
    { icon: '❤️', title: 'Health & Wellness', text: 'Protected paths encourage walking and biking, reducing obesity, heart disease, and improving mental health.' },
    { icon: '🏘️', title: 'Community Connection', text: 'Greenways become gathering spaces, connecting neighborhoods and fostering a sense of belonging.' },
    { icon: '🌳', title: 'Environmental Benefits', text: 'Fewer car trips mean cleaner air, reduced carbon emissions, and preserved green spaces.' },
    { icon: '📈', title: 'Economic Growth', text: 'Studies show greenways increase nearby property values by 5-10% and attract businesses.' },
    { icon: '⚖️', title: 'Equity & Access', text: "East Nashville has them. North Nashville has them. Midtown has them. It's time for South Nashville to have equal infrastructure." },
  ],
};

export const actions = {
  title: 'Take Action Today',
  subtitle: "The city has plans, but they're moving slowly. Let's work together to accelerate real greenway development.",
  cards: [
    {
      number: 1,
      title: 'Get Outside!',
      text: 'One of the best ways to advocate for walking and biking in Nashville is to do it!',
      footer: { type: 'text', content: '🚶🚴🏡' },
    },
    {
      number: 2,
      title: 'Get involved with Bike Fun!',
      text: 'Bike fun is a great organization that teaches bike skills. They have an office off of Nolensiville road!',
      footer: { type: 'link', href: 'https://nashvillebikefun.org/', text: 'Visit Bike Fun' },
    },
    {
      number: 3,
      title: 'Join our mailing list!',
      text: '',
      footer: { type: 'link', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeILnoDo_7AW2XO_1t3JkMONesT7Be_XMU5J4G_fwhrDWkJhg/viewform?usp=dialog', text: 'Join Mailing List' },
    },
    {
      number: 4,
      title: 'Spread the Word',
      text: 'Share this site with neighbors, friends, and on social media. Build momentum.',
      footer: { type: 'share' },
    },
  ],
};
