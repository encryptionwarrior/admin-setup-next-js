import React from 'react';
import { SidebarTrigger } from '../ui/sidebar';
import { Separator } from '../ui/separator';
import { Breadcrumbs } from '../breadcrumbs';
import SearchInput from '../search-input';
import { UserNav } from './user-nav';
import { ThemeSelector } from '../theme-selector';
import { ModeToggle } from './ThemeToggle/theme-toggle';
import CtaGithub from './cta-github';
import { ProfileDropdown } from './profile-dropdown';
import { ConfigDrawer } from '../config-drawer';
import HamburgerSidebar from './headerMenu';

export default function Header() {
  return (
    <header className='flex flex-wrap h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
      <div className='flex flex-wrap items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' />
        <Separator orientation='vertical' className='mr-2 h-4' />
        <Breadcrumbs />
      </div>

      <div className='flex flex-wrap items-center gap-1 px-4'>
        <CtaGithub />
        <div className='hidden lg:flex'>
          <SearchInput />
        </div>
        <UserNav />
        <ModeToggle />
        <div className='hidden xl:block'>
        <ConfigDrawer variant='secondary'/>
        </div>
        <div className='hidden xl:block'>
        <ThemeSelector />
        </div>
        <div className='xl:hidden w-6 mr-2'>
        <HamburgerSidebar/>
        </div>
        {/* <ProfileDropdown /> */}
      </div>
    </header>
  );
}
