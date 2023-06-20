'use client';

import { navTitle, navItem } from '../../constants/nav';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../ui/hover-card/hover-card';
import Drawer from '../Drawer/Drawer';
import NavItemButton from '@/components/atoms/Navbar/NavItemButton/NavItemButton';
import { ThemeToggle } from '@/components/atoms/Navbar/ThemeToggle/ThemeToggle';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
// import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const { theme } = useTheme();
    const [isMounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(() => true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <header className='top-0 z-40 flex h-16 w-full items-center justify-between bg-background'>
                <div className='flex items-center justify-center gap-6 md:gap-10'>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            {/* <Image
                                src={theme === 'dark' ? '/ssera/white.svg' : '/ssera/black.svg'}
                                alt='logo'
                                height={0}
                                width={100}
                                className='h-auto'
                            /> */}
                            <Link href='/' className='select-none text-4xl font-semibold'>
                                FH
                            </Link>
                        </HoverCardTrigger>
                        <HoverCardContent className='text-center'>
                            I don't have a logo, so for a temporary time this LE SSERAFIM logo would be here because im
                            a FEARNOT 💙
                        </HoverCardContent>
                    </HoverCard>
                    {navTitle?.length ? (
                        <nav className='hidden gap-6 sm:flex'>
                            {navTitle?.map(
                                (item, index: number) =>
                                    item.href && (
                                        <Link
                                            key={index}
                                            href={item?.disabled ? '#' : item.href}
                                            className={cn(
                                                'flex items-center text-sm font-bold text-primary',
                                                item.disabled
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
