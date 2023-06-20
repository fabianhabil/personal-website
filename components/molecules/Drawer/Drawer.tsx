import NavItemButton from '@/components/atoms/Navbar/NavItemButton/NavItemButton';
import { navItem, navTitle } from '@/components/constants/nav';
import { Icons } from '@/components/icons/icons';
import { Button } from '@/components/ui/button/button';
import { Sheet, SheetContent, SheetDescription, SheetTrigger } from '@/components/ui/sheet/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Drawer({ theme }: { theme: string | undefined }) {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant='ghost' size={'sm'} style={{ marginRight: -12 }}>
                        <Icons.menu className='h-6 w-6' />
                    </Button>
                </SheetTrigger>
                <SheetContent className={cn('w-48', theme === 'dark' ? 'bg-black' : 'bg-white')}>
                    <SheetDescription asChild>
                        <div className='flex flex-col items-center gap-2 pt-6'>
                            {navTitle.map((data, index) => {
                                return (
                                    <Link
                                        className={cn(
                                            'p-2 text-base font-bold text-primary',
                                            data.disabled && 'cursor-not-allowed opacity-80'
                                        )}
                                        href={data.disabled ? '#' : data.href}
                                        key={index}
                                    >
                                        {data.title}
                                    </Link>
                                );
                            })}
                            <div className='flex w-full flex-row flex-wrap items-center gap-1'>
                                {navItem.map((data, index) => {
                                    return <NavItemButton key={index} navItem={data} />;
                                })}
                            </div>
                        </div>
                    </SheetDescription>
                </SheetContent>
            </Sheet>
        </>
    );
}
