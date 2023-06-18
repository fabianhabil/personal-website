'use client';

import { HoverCard, HoverCardContent, HoverCardTrigger } from './atoms/hover-card/hover-card';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types/nav';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface MainNavProps {
    items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
    const { theme } = useTheme();
    const [isMounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(() => true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className='flex items-center justify-center gap-6 md:gap-10'>
            <HoverCard>
                <HoverCardTrigger>
                    <Link href='/'>
                        <Image
                            src={theme === 'dark' ? '/ssera/white.svg' : '/ssera/black.svg'}
                            alt='logo'
                            height={0}
                            width={100}
                            className='h-auto'
                        />
                    </Link>
                </HoverCardTrigger>
                <HoverCardContent className='text-center'>
                    I don't have a logo, so for a temporary time this LE SSERAFIM logo would be here because im a FEARNOT
                    💙
                </HoverCardContent>
            </HoverCard>
            {items?.length ? (
                <nav className='flex gap-6'>
                    {items?.map(
                        (item, index) =>
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
    );
}
