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
                text: "About me",
                href: new URL(`${CNAME}/about`)
            },
            {
                text: "Projects",
                href: new URL(`${CNAME}/projects`)
            },
            {
                text: "Blog",
                href: new URL(`${CNAME}/blog`)
            },
            {
                text: "Contact",
                href: new URL(`${CNAME}/contact`)
            },
        ]
    },
    footer: {
        links: [
            {
                text: "Homepage",
                href: new URL(`${CNAME}/`)
            },
            {
                text: "Feed (RSS)",
                href: new URL(`${CNAME}/feed.rss`)
            },
        ]
    }
}