import React from 'react';
import Image from 'next/image';
import checkmatesImg from '/public/assets/projects/CheckMates.jpg';
import '../app/globals.css';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const checkmates = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={checkmatesImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2>CheckMates</h2>
                    <h3>Next.js / Tailwind CSS</h3>
                </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <br></br>
          <p>CheckMates is a web application my team and I created using Next.js and hosted on Vercel.</p>
          <br></br>
          <p>It&apos;s designed for anyone who dines out or shops with friends often and struggles to split the bill evenly. With CheckMates, you can simply scan your receipt, and the app takes care of all the calculations, making it easy, accurate, and even a little fun to share expenses!</p>
          <a
            href='https://github.com/lyydiakim/checkmate'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#f9a8d4] to-[#ec4899]'>Code</button>
          </a>
          <a
            href='https://checkmate-six.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 bg-gradient-to-r from-[#ec4899] to-[#be185d]'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-stone-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Typescript
              </p>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tesseract OCR
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default checkmates