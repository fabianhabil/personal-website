'use client';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '../atoms/hover-card/hover-card';
import { type NavTitle, navTitle } from '../constants/nav';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
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
                        <HoverCardTrigger href='/'>
                            <Image
                                src={theme === 'dark' ? '/ssera/white.svg' : '/ssera/black.svg'}
                                alt='logo'
                                height={0}
                                width={100}
                                className='h-auto'
                            />
                        </HoverCardTrigger>
                        <HoverCardContent className='text-center'>
                            I don't have a logo, so for a temporary time this LE SSERAFIM logo would be here because im
                            a FEARNOT 💙
                        </HoverCardContent>
                    </HoverCard>
                    {navTitle?.length ? (
                        <nav className='flex gap-6'>
                            {navTitle?.map(
                                (item: NavTitle, index: number) =>
                                    item.href && (
                                        <Link
                                            key={index}
                                            href={item.disabled ? '#' : item.href}
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
                <p>asd</p>
                {/* <MainNav items={siteConfig.mainNav} /> */}
                {/* <div className='flex items-center justify-end'>
                        <nav className='flex items-center space-x-1'>
                            <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
                                <div
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost'
                                    })}
                                >
                                    <Icons.gitHub className='h-5 w-5' />
                                    <span className='sr-only'>GitHub</span>
                                </div>
                            </Link>
                            <Link href={siteConfig.links.twitter} target='_blank' rel='noreferrer'>
                                <div
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost'
                                    })}
                                >
                                    <Icons.twitter className='h-5 w-5 fill-current' />
                                    <span className='sr-only'>Twitter</span>
                                </div>
                            </Link>
                            <ThemeToggle />
                        </nav>
                    </div> */}
            </header>
        </>
    );
}
