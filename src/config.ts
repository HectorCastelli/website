const CNAME = "https://gohector.com"

export default {
    cname: CNAME,
    author: "Hector Castelli Zacharias",
    description: "My personal website",
    keywords: ["blog", "portfolio", "personal"],
    // announcement: undefined,
    announcement: "This website is under construction. There is a high change some links will not work.",
    header: {
        links: [
            {
                text: "Projects",
                href: '/projects',
            },
            {
                text: "Blog",
                href: '/blog',
            },
            {
                text: "Contact",
                href: '/contact',
            },
        ]
    },
    footer: {
        links: [
            {
                text: "Homepage",
                href: '/',
            },
            {
                text: "Blog",
                href: '/blog',
            },
            {
                text: "Feed (RSS)",
                href: '/rss.xml',
            },
            {
                text: "Analytics",
                href: 'https://analytics.umami.is/share/4JOEokFotSrQAsr4/GoHector'
            }
        ]
    },
    pagination: {
        blog: 6,
    }
}