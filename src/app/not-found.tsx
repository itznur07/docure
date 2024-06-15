import { LogOut } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

// next js metadata

export const metadata: Metadata = {
  title: "404 - Page Not Found | Docure",
  description: "Docure is health care application",
};

const NotFound = () => {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <main className='flex-1 flex flex-col items-center justify-center gap-4'>
        <div className='flex flex-col items-center justify-center space-y-2 text-center'>
          <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
            Error 404
          </div>
          <h1 className='text-4xl font-extrabold tracking-tighter sm:text-6xl'>
            Page Not Found
          </h1>
          <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
        <Link
          href='/'
          className='inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
          prefetch={false}
        >
          <LogOut /> <span className='mx-2'>Home</span>
        </Link>
      </main>
    </div>
  );
};

export default NotFound;

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
