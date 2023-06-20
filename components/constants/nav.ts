import { Icons } from '../icons/icons';

export type NavTitle = typeof navTitle;

export const navTitle = [
    {
        title: 'Home',
        href: '/',
    },
    { title: 'Portfolio', href: '/portfolio', disabled: false }
];

export const navItem = [
    { title: 'Instagram', href: 'https://instagram.com/fabianhabil', icon: Icons.instagram },
    { title: 'Github', href: 'https://github.com/fabianhabil', icon: Icons.gitHub },
    { title: 'LinkedIn', href: 'https://linkedin.com/in/fabianhabil', icon: Icons.linkedIn }
];

export type NavItem = (typeof navItem)[0];
