import { Icons } from '../icons';

export const navTitle = [
    {
        title: 'Home',
        href: '/'
    },
    { title: 'Portfolio', href: '/portfolio', disabled: true }
];

export type NavTitle = typeof navTitle;

export const navItem = [
    { title: 'Twitter', href: 'https://twitter.com/fortunecs2', icon: Icons.twitter },
    { title: 'Github', href: 'https://github.com/fabianhabil', icon: Icons.gitHub },
    { title: 'LinkedIn', href: 'https://linkedin.com/in/fabianhabil', icon: Icons.linkedIn }
];

export type NavItem = typeof navItem;
