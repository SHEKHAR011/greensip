'use client';

import * as React from 'react';
import Link from 'next/link';
import type { MainNavItem } from '@/types';
import { cn } from '@/lib/utils';
import { MobileNav } from '@/components/mobile-nav';
import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/mode-toggle';
import { Leaf } from 'lucide-react';

interface CircularNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export default function CircularNavigation({
  items,
  children
}: CircularNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <nav className="flex flex-wrap items-center justify-between w-full gap-4 p-2 mx-auto mt-4 md:w-fit md:p-1 md:gap-20 md:bg-zinc-50 md:dark:bg-zinc-900 md:rounded-full md:px-8 md:border-2 md:border-muted/30 md:dark:border-muted/80 md:shadow-md backdrop-blur-sm md:backdrop-blur-none">
      <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
        <div className="p-1 rounded-full bg-slate-50 dark:bg-slate-900">
          <Leaf className="transition-transform duration-300 ease-in-out size-8 hover:scale-110" />
        </div>
        <span className="text-lg font-extrabold md:text-xl tracking-tightest">GREENSIP</span>
      </Link>
      {items?.length ? (
        <div className="hidden space-x-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'text-primary transition-colors hover:text-foreground/80',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ) : null}
      <div className="flex items-center space-x-2">
        <div className="hidden md:block">
          <ModeToggle />
        </div>
        <button
          className="md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <Icons.close /> : <Icons.Menu />}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      {showMobileMenu && items && (
        <div className="absolute left-0 right-0 w-full mt-2 top-full md:hidden">
          <MobileNav items={items}>{children}</MobileNav>
        </div>
      )}
    </nav>
  );
}