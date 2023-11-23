const CNAME = "https://gohector.com"

export default {
    cname: CNAME,
    title: "gohector.com",
    author: "Hector Castelli Zacharias",
    description: "My personal website",
    keywords: ["blog", "portfolio", "personal"],
    announcement: undefined,
    // announcement: "",
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
                text: "Tags",
                href: '/tag',
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
            name: "E-mail",
            link: "mailto:hector.zacharias@gmail.com",
            printName: "hector.zacharias@gmail.com"
        },
        {
            name: "Twitter",
            link: "https://twitter.com/ZektorH",
            printName: "@ZektorH"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/hectorzacharias/",
            printName: "in/hectorzacharias"
        },
        {
            name: "Phone",
            link: "sms:+34677059383",
            printName: "+34 677 059 383"
        }
    ]
}
