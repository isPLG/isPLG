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
    tags: {
        path: '/tags',
        title: 'tags'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'isPLG',
    title: 'isPLG',
    description: 'Practical Talks On Product Led Growth & Best Practices.',
    url: 'https://isPLG.com',
    githubUrl: 'https://github.com/isPLG/isPLG',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
