import React from 'react';
import '../globals.css';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";
import Link from 'next/link';

const Main = () => {
    return(
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 pt-5 flex justify-center items-center'>
                <div>
                    {/*<p className='uppercase tracking-widest text-stone-600'>Let's create together</p>*/}
                    <h1 className='py-4 text-stone-800'>
                        Hi, I&apos;m <span className='text-[#db2777]'>Chloé</span>
                    </h1>

                    <p className="text-stone-700 max-w-[65%] m-auto">
                    A curious and creative engineering graduate with a love for technology, culture, and beautiful design.{' '}
                        <Link href="/#projects" scroll={true}>
                            <span className="underline cursor-pointer hover:opacity-80 transition-opacity duration-200">
                                Check out some of the things I&apos;ve been working on.
                            </span>
                        </Link>
                    </p>

                    {/*<p className='uppercase pt-10 tracking-widest text-[#9d174d]'>
                            Let&apos;s connect!
                    </p>*/}

                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                        <a href='https://www.linkedin.com/in/chloemorali/' target='_blank' rel='noopener noreferrer'>
                            <div className='rounded-full shadow-md shadow-stone-400 p-6 cursor-pointer hover:bg-stone-100 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>

                        <a href='https://github.com/cnmorali' target='_blank' rel='noopener noreferrer'>
                            <div className='rounded-full shadow-md shadow-stone-400 p-6 cursor-pointer hover:bg-stone-100 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>

                        <a href='mailto:chloenoormorali@gmail.com'>
                            <div className='rounded-full shadow-md shadow-stone-400 p-6 cursor-pointer hover:bg-stone-100 ease-in duration-300'>
                                <SiGmail />
                            </div>
                        </a>

                        <a href='/assets/Chloe-Morali-Resume.pdf' download>
                            <div className='rounded-full shadow-md bg-gradient-to-r from-pink-500 to-pink-300 text-stone-800 shadow-stone-400 px-6 py-3 cursor-pointer hover:bg-stone-100 ease-in duration-300 font-semibold'>
                                Resume
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main