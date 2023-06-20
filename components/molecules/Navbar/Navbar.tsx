'use client';

import { navTitle, navItem } from '../../constants/nav';
import Drawer from '../Drawer/Drawer';
import NavItemButton from '@/components/atoms/Navbar/NavItemButton/NavItemButton';
import { ThemeToggle } from '@/components/atoms/Navbar/ThemeToggle/ThemeToggle';
import IsMounted from '@/hooks/isMounted';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
// import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const { theme } = useTheme();
    const isMounted = IsMounted();

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <header className='top-0 z-40 flex h-16 w-full items-center justify-between bg-background'>
                <div className='flex items-center justify-center gap-6 md:gap-10'>
                    <Link href='/' className={cn('select-none text-4xl font-semibold')}>
                        FH
                    </Link>
                    {navTitle?.length ? (
                        <nav className='hidden gap-6 sm:flex'>
                            {navTitle?.map(
                                (item, index: number) =>
                                    item.href && (
                                        <Link
                                            key={index}
                                            href={item?.disabled === true ? '#' : item.href}
                                            className={cn(
                                                'flex items-center text-sm font-bold text-primary',
                                                item.disabled === true
                                                    ? 'cursor-not-allowed opacity-80'
                                                    : 'underline-offset-4  hover:underline',
                                                theme === 'dark' ? 'color-blue-ssera-dark' : 'color-blue-ssera'
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    )
                            )}
                        </nav>
                    ) : null}
                </div>
                <div className='hidden items-center gap-2 sm:flex'>
                    {navItem.map((data, index) => {
                        return <NavItemButton key={index} navItem={data} />;
                    })}
                    <ThemeToggle />
                </div>
                <div className='flex gap-1 sm:hidden'>
                    <ThemeToggle />
                    <Drawer theme={theme} />
                </div>
            </header>
        </>
    );
}
