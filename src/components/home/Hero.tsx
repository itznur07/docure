import heroImage from "@/assets/images/hero-image.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";

const Hero = () => {
  return (
    <>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
        <div className='absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]'></div>
      </div>
      {/* Hero */}
      <div className='relative overflow-hidden py-14 lg:py-16'>
        {/* Gradients */}
        <div
          aria-hidden='true'
          className='flex absolute -top-96 start-1/2 transform -translate-x-1/2'
        >
          <div className='bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]' />
          <div className='bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background' />
        </div>
        {/* End Gradients */}
        <div className='relative z-10 container'>
          <div className='container py-10 lg:py-10 lg:flex lg:items-center  lg:justify-between '>
            <div className='max-w-2xl '>
              <Badge variant='outline' className='py-1 px-3'>
                Discuss with senior doctors
              </Badge>
              {/* Title */}
              <div className='mt-5 max-w-2xl'>
                <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                  Beautiful UI Blocks
                </h1>
              </div>
              {/* End Title */}
              <div className='mt-5 max-w-3xl'>
                <p className='text-xl text-muted-foreground'>
                  Over 10+ fully responsive, UI blocks you can drop into your
                  Shadcn UI projects and customize to your heart&apos;s content.
                </p>
              </div>
              {/* Buttons */}
              <div className='mt-8 gap-3 lg:flex sm:flex sm:flex-col   lg:flex-row'>
                <Button size={"lg"}>Make an appointment</Button>
                <Button size={"lg"} variant={"outline"}>
                  Contact Us
                </Button>
              </div>
              {/* End Buttons */}
            </div>
            <div className='sm:mt-5 lg:mt-0 '>
              <Image
                src={heroImage}
                alt='hero-image'
                width={800}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>

      {/* End Hero */}
    </>
  );
};

export default Hero;
