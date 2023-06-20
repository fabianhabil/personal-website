import type { NavItem } from '@/components/constants/nav';
import { Button } from '@/components/ui/button/button';
import Link from 'next/link';

export default function NavItemButton({ navItem }: { navItem: NavItem }) {
    return (
        <>
            <Link href={navItem.href} target='_blank' rel='noreferrer'>
                <Button size={'sm'} variant='ghost'>
                    <navItem.icon className='h-5 w-5' />
                    <span className='sr-only'>{navItem.title}</span>
                </Button>
            </Link>
        </>
    );
}
