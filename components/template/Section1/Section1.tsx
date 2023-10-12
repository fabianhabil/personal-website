'use client';

import Spotify from '../Spotify/Spotify';
import { greetingMessage } from '@/components/constants/site';
import WindowSize from '@/hooks/windowSize';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Section1() {
    const [greetingIndex, setGreetingIndex] = useState<number>(0);
    const [mounted, setMounted] = useState<boolean>(false);
    const windowSize = WindowSize();

    useEffect(() => {
        const interval = setInterval(() => {
            setGreetingIndex((state) =>
                state === greetingMessage.length - 1 ? 0 : state + 1
            );
        }, 1000);

        setMounted(() => true);

        return () => {
            clearInterval(interval);
        };
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <div
                className={cn(
                    'flex flex-col justify-between gap-10 py-4 lg:flex-row lg:items-center lg:justify-between'
                )}
            >
                <div
                    className='flex flex-col justify-center gap-5'
                    style={{ minHeight: `${windowSize!.innerHeight - 120}px` }}
                >
                    <p className='text-4xl font-normal'>
                        {greetingMessage[greetingIndex]}, <br />
                        my name is Fabian Habil
                    </p>
                    <p className='text-6xl font-semibold'>
                        I'm a Software Engineer
                    </p>
                    <p className='text-2xl font-normal'>
                        Software Engineer Intern at{' '}
                        <a
                            className='cursor-pointer text-green-400'
                            href='https://www.cultivest.co/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Cultivest
                        </a>{' '}
                        and <br className='hidden sm:block' />
                        currently studying Computer Science at Bina Nusantara
                        University
                    </p>
                </div>
                <div>
                    <Spotify />
                </div>
            </div>
        </>
    );
}
