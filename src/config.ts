import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: '>is{PLG}',
    title: 'isPLG',
    description: 'Practical Talks On Product Led Growth & Best Practices.',
    url: 'https://isPLG.com',
    githubUrl: 'https://github.com/isPLG/isPLG',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
