export const authors = {
  'laura-girod': {
    name: 'Laura Girod',
    role: 'Head of Content at Request Finance',
    bio: 'Laura leads content at Request Finance, writing practical guides for CFOs and operations teams on stablecoins, spend management, and the tools reshaping B2B payments.',
    image: '/team/Laura.png',
    linkedin: 'https://www.linkedin.com/in/laura-g-99315b97/',
  },
}

export function resolveAuthor(authorRef) {
  if (!authorRef) return null
  if (typeof authorRef === 'string') {
    return authors[authorRef] ?? null
  }
  return authorRef
}
