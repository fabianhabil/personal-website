'use client';

import IsMounted from '@/hooks/isMounted';
import Link from 'next/link';
import React from 'react';

export default function Page() {
    const isMounted = IsMounted();

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
                <Link
                    target='_blank'
                    href='/ptf/Resume_FabianHabilRamdhan.pdf'
                    className='text-center text-xl font-medium text-blue-400 underline-offset-4 hover:underline'
                >
                    Fabian Habil's Resume
                </Link>
                <Link
                    target='_blank'
                    href='/ptf/Portofolio_FabianHabilRamdhan.pdf'
                    className='text-center text-xl font-medium text-blue-400 underline-offset-4 hover:underline'
                >
                    Fabian Habil's Portfolio
                </Link>
            </div>
        </>
    );
}
