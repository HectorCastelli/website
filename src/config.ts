const CNAME = "https://gohector.com"

export default {
    cname: CNAME,
    title: "gohector.com",
    author: "Hector Castelli Zacharias",
    description: "My personal website",
    keywords: ["blog", "portfolio", "personal"],
    // announcement: undefined,
    announcement: "This website is under construction. There is a high chance some links will not work.",
    header: {
        links: [
            {
                text: "Home",
                href: '/',
            },
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
                text: "Home",
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
        blog: 4,
    },
    socialLinks: [
        {
            name: "🐦 twitter",
            link: "https://twitter.com/ZektorH"
        },

        {
            name: "🗄️ linkedIn",
            link: "https://www.linkedin.com/in/hectorzacharias/"
        }
    ]
}