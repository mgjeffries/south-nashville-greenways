export interface AuthorBio {
  name: string
  avatar: string
  about: string
  email: string
}

export const authors: Record<string, AuthorBio> = {
  'gib-jeffries': {
    name: 'Gib Jeffries',
    avatar: '/images/authors/gib-jeffries.png',
    about: 'I love to bike around Nashville for fun and excercise!',
    email: 'gib.jeffries@gmail.com',
  },
}