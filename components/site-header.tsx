import { buttonVariants } from './atoms/button/button';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export function SiteHeader() {
    return (
        <header className='top-0 z-40 w-full bg-background'>
            <div className='flex h-16 items-center sm:justify-between'>
                <MainNav items={siteConfig.mainNav} />
                <div className='flex items-center justify-end'>
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
                </div>
            </div>
        </header>
    );
}
