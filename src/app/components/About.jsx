import React from 'react';
import '../globals.css';
import Image from 'next/image';  // Import Image component

const About = () => {
  return (
    <div id='about' className='w-full p-2 flex flex-col items-center'>
      <p className='uppercase text-xl tracking-widest text-[#9d174d] text-center mb-12'>About Me</p>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 p-8'>
        <div className='col-span-2'>
          <p className='py-2 text-stone-600'>I&apos;m seeking a permanent software engineering position at a global tech company that differentiates itself through innovation, customer delight, and talent development.</p>
          <p className='py-2 text-stone-600'>I recently graduated from Santa Clara University with a degree in Computer Science & Engineering. I also had the opportunity to study at Yonsei University in Seoul in Fall 2022 and at L&apos;Institut Français de la Mode in Paris in Summer 2023.</p>
          <p className='py-2 text-stone-600'> Over the past year, during my Senior Design Project, my teammate and I designed an architecture to manage and secure IoT devices on small and vulnerable networks. We productized it into a mobile app to empower users to confidently embrace the benefits of smart devices.</p>
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
