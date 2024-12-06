import React from 'react';
import Image from 'next/image';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';  // Import Link component from next/link
import '../globals.css';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-xl tracking-widest text-[#9d174d] text-center mb-12'>Projects</p>
        {/* Grid with 2 columns */}
        <div className='grid md:grid-cols-2 gap-8 p-8'>

          {/* Project 1: IoTsolate */}
          <div className='relative flex flex-col items-center justify-center h-auto w-full shadow-md shadow-stone-400 rounded-xl p-4 group hover:bg-stone-100 transition duration-300'>
            <a 
              href='https://github.com/cnmorali/IoTsolate' 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <div className='relative block w-full'>
                <Image 
                  className='rounded-xl object-cover h-64 w-full group-hover:opacity-50 transition duration-300' 
                  src='/assets/projects/IoTsolate.jpg' 
                  alt='IoTsolate' 
                  width={2880}  // Adjust width and height to use numeric values, not strings
                  height={1562}
                />
                <div className='p-4'>
                  <h3 className='text-2xl text-stone-700 tracking-wider text-center'>IoTsolate</h3>
                  <p className='pt-2 text-stone-600 text-center'>Manage and secure your IoT devices</p>
                </div>
              </div>
            </a>
          </div>

          {/* Project 2: CheckMates */}
          <div className='relative flex flex-col items-center justify-center h-auto w-full shadow-md shadow-stone-400 rounded-xl p-4 group hover:bg-stone-100 transition duration-300'>
            <a 
              href='https://github.com/lyydiakim/checkmate' 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <div className='relative block w-full'>
                <Image 
                  className='rounded-xl object-cover h-64 w-full group-hover:opacity-50 transition duration-300' 
                  src='/assets/projects/CheckMates.jpg' 
                  alt='CheckMates' 
                  width={2880}
                  height={1562}
                />
                <div className='p-4'>
                  <h3 className='text-2xl text-stone-700 tracking-wider text-center'>CheckMates</h3>
                  <p className='pt-2 text-stone-600 text-center'>Easily split bills with friends</p>
                </div>
              </div>
            </a>
          </div>

          {/* Project 3: My Personal Site */}
          <div className='relative flex flex-col items-center justify-center h-auto w-full shadow-md shadow-stone-400 rounded-xl p-4 group hover:bg-stone-100 transition duration-300'>
            <a 
              href='https://github.com/cnmorali' 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <div className='relative block w-full'>
                <Image 
                  className='rounded-xl object-cover h-64 w-full group-hover:opacity-50 transition duration-300' 
                  src='/assets/projects/website.jpg' 
                  alt='My Personal Website' 
                  width={2880}
                  height={1562}
                />
                <div className='p-4'>
                  <h3 className='text-2xl text-stone-700 tracking-wider text-center'>My Personal Website</h3>
                  <p className='pt-2 text-stone-600 text-center'>My online portfolio</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
      <div className='flex justify-center py-12'>
        <Link href='/'>  {/* Use Link instead of a */}
          <HiOutlineChevronDoubleUp className='text-[#9d174d]' size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
