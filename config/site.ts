export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: 'Fabian Habil',
    description: 'Fabian Habil - Personal Website',
    mainNav: [
        {
            title: 'Home',
            href: '/',
        },
        { title: 'Portfolio', href: '/portfolio', disabled: true }
    ],
    links: {
        twitter: 'https://twitter.com/fortunecs2',
        github: 'https://github.com/fabianhabil',
        linkedIn: 'https://www.linkedin.com/in/fabianhabil'
    }
};
