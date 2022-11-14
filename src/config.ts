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
    name: '>is{PLG}',
    title: 'isPLG',
    description: 'Practical Talks On Product Led Growth & Best Practices.',
    url: 'https://isPLG.com',
    githubUrl: 'https://github.com/isPLG/isPLG',
    listDrafts: true,
    image: 'https://images.unsplash.com/photo-1589409514187-c21d14df0d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
    // description ?
}

export const PAGE_SIZE = 8
