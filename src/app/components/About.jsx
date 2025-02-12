import React from 'react';
import '../globals.css';
import Image from 'next/image';  // Import Image component

const About = () => {
  return (
    <div id='about' className='w-full p-2 flex flex-col items-center'>
      <p className='uppercase text-xl tracking-widest text-[#9d174d] text-center mb-12'>About Me</p>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 p-8'>
        <div className='col-span-2'>
          <p className='py-2 text-stone-600'>I&apos;m seeking a challening engineering position at a global tech company that differentiates itself through innovation, customer delight, and talent development. I&apos;m interested in a rotational program opportunity to grow and explore.</p>
          <p className='py-2 text-stone-600'>I recently graduated from Santa Clara University with a degree in Computer Science & Engineering. For my Senior Design Project, my teammate and I designed a system to manage and secure IoT devices on vulnerable networks. We productized it into a mobile app to empower users to embrace smart devices without fear.</p>
          <p className='py-2 text-stone-600'>I can&apos;t wait to bring my commitment to excellence and innovation to real-world solutions!</p>
        </div>
        <div className='w-full h-auto m-auto flex items-center justify-center'>
          <Image 
            className='rounded-xl shadow-md shadow-stone-400' 
            src='/assets/profilepic.jpg' 
            alt='Profile Picture'
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default About;
