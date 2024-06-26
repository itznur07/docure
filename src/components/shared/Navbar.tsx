"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={` ${isScrolled ? `${styles.navbarFixed}` : "container"}`}>
      <header
        className={`${styles.glassmorphism} flex h-20 w-full shrink-0 items-center justify-between px-4 md:px-6 `}
      >
        {/* FOR RESPONSIVENESS START */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='lg:hidden'>
              <MenuIcon className='h-6 w-6' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='bg-white dark:bg-gray-950'>
            <div className='flex h-full max-h-screen flex-col'>
              <div className='flex h-20 items-center justify-between border-b px-6'>
                <Link
                  href='#'
                  className='flex items-center gap-2 font-semibold'
                  prefetch={false}
                >
                  <MountainIcon className='h-6 w-6' />
                  <span className='sr-only'>Acme Inc</span>
                </Link>
                <SheetClose asChild>
                  <Button variant='outline' size='icon'>
                    <XIcon className='h-6 w-6' />
                    <span className='sr-only'>Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className='flex-1 overflow-auto py-6'>
                <div className='grid gap-4 px-6'>
                  <Link
                    href='#'
                    className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                    prefetch={false}
                  >
                    <HomeIcon className='h-5 w-5' />
                    Home
                  </Link>
                  <Link
                    href='#'
                    className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                    prefetch={false}
                  >
                    <UserIcon className='h-5 w-5' />
                    About
                  </Link>
                  <Link
                    href='#'
                    className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                    prefetch={false}
                  >
                    <PackageIcon className='h-5 w-5' />
                    Products
                  </Link>
                  <Link
                    href='#'
                    className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                    prefetch={false}
                  >
                    <MailIcon className='h-5 w-5' />
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href='#'
          className='mr-6 hidden lg:flex items-center gap-2 font-semibold'
          prefetch={false}
        >
          <MountainIcon className='h-8 w-8' />
          <span className='text-xl'>Docure</span>
        </Link>
        {/* FOR RESPONSIVENESS END */}
        <NavigationMenu className='hidden lg:flex '>
          <NavigationMenuList className='gap-7'>
            <NavigationMenuLink asChild>
              <Link href='#' className=''>
                Consultation
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href='#' className=''>
                Health Plans
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href='#' className=''>
                Medicine
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href='#'>Diagnostics</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href='#'>NGOs</Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href='/login'>
          <Button className='rounded-full px-7'>Login</Button>
        </Link>
      </header>
    </div>
  );
};

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='20' height='16' x='2' y='4' rx='2' />
      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  );
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m7.5 4.27 9 5.15' />
      <path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
      <path d='m3.3 7 8.7 5 8.7-5' />
      <path d='M12 22V12' />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  );
}

export default Navbar;
