import type { ReactNode } from 'react'
import ShareButton from '../components/ShareButton.tsx'

interface ActionData {
  number: number
  title: string
  description?: string
  footer: ReactNode
}

export const actions: ActionData[] = [
  {
    number: 1,
    title: 'Get Outside!',
    description: 'One of the best ways to advocate for walking and biking in Nashville is to do it!',
    footer: <p>🚶🚴🏡</p>,
  },
  {
    number: 2,
    title: 'Get involved with Bike Fun!',
    description: 'Bike fun is a great organization that teaches bike skills. They have an office off of Nolensiville road!',
    footer: <a href="https://nashvillebikefun.org/">Visit Bike Fun</a>,
  },
  {
    number: 3,
    title: 'Join our mailing list!',
    footer: <a href="https://docs.google.com/forms/d/e/1FAIpQLSeILnoDo_7AW2XO_1t3JkMONesT7Be_XMU5J4G_fwhrDWkJhg/viewform?usp=dialog">Join Mailing List</a>,
  },
  {
    number: 4,
    title: 'Spread the Word',
    description: 'Share this site with neighbors, friends, and on social media. Build momentum.',
    footer: <ShareButton />,
  },
]
