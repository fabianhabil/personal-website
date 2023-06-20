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
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-2xl font-bold text-primary'>
                    Portfolio Page is coming soon, but you can download my portfolio in advance as a PDF.
                </p>
                <p className='text-xl font-medium text-primary'>
                    Download my portfolio here{'   '}
                    <Link
                        target='_blank'
                        href='/ptf/Portofolio_FabianHabilRamdhan.pdf'
                        className='text-blue-400 underline-offset-4 hover:underline'
                    >
                        Fabian Habil's Portfolio
                    </Link>
                </p>
            </div>
        </>
    );
}
