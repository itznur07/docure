import Form from "@/components/auth/Form";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Docure",
  description: "Login Page Docure",
};

const Login = () => {
  return (
    <div className='flex items-center justify-center mt-36 '>
      <div className='w-[450px] h-auto border p-3 rounded-sm'>
        {/* Header */}
        <div className='flex flex-col items-center justify-center'>
          <Link
            href='#'
            className='hidden lg:flex items-center gap-2 font-semibold'
            prefetch={false}
          >
            <MountainIcon className='h-10 w-10' />
          </Link>

          <Separator className='my-2'></Separator>

          <h1 className='text-xl font-bold'>Login</h1>
          <p>Login using credentials</p>
        </div>

        {/* Auth Form */}
        <Form type='login' />
        {/* already have  an account login */}
        <div className='flex items-center gap-2 text-sm font-medium mt-2'>
          <span>Create an account?</span>
          <Link href='/signup'>
            <p className='text-blue-500'>SignUp</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

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
