import Form from "@/components/auth/Form";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SignUp | Docure",
  description: "Sign Up Page Docure",
};

const SignUp = () => {
  return (
    <div className='flex items-center justify-center mt-36 '>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
        <div className='absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]'></div>
      </div>
      <div className='w-[450px] h-auto shadow-sm py-5 px-5 rounded-sm bg-white'>
        {/* Header */}
        <div className='flex flex-col items-center justify-center'>
          <Link
            href='/'
            className='hidden lg:flex lg:flex-col items-center gap-1 font-semibold'
            prefetch={false}
          >
            <MountainIcon className='h-10 w-10' />
            <span className='text-xl font-bold'>Docure</span>
          </Link>

          <Separator className='my-2'></Separator>

          <p>Create an new account</p>
        </div>

        {/* Auth Form */}
        <Form type='signup' />
        {/* already have  an account login */}
        <div className='flex items-center gap-2 text-sm font-medium mt-2'>
          <span>Already have an account?</span>
          <Link href='/login'>
            <p className='text-blue-500'>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

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
