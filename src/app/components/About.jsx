import React from 'react';
import '../globals.css';
import Image from 'next/image';  // Import Image component
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';  // Import Link component from next/link

const About = () => {
  return (
    <div id='about' className='max-w-[1240px] mx-auto px-2 py-16 flex flex-col items-center'>

      <div className='flex flex-col items-center justify-center gap-8'>
        <div className='w-[270px] h-[270px] rounded-full overflow-hidden shadow-md shadow-stone-400'>
          <Image
            src='/assets/profilepic.jpg'
            alt='Profile Picture'
            width={200}
            height={200}
            className='object-cover w-full h-full'
          />
        </div>

        <p className='text-stone-700'>I&apos;m just getting started.</p>
      </div>

      <div className='flex justify-center py-12'>
        <Link href='/'>
          <HiOutlineChevronDoubleUp className='text-[#9d174d]' size={30} />
        </Link>
      </div>
    </div>
  );
};

export default About;
