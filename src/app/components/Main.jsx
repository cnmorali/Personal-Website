import React from 'react';
import '../globals.css';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
    return(
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 pt-5 flex justify-center items-center'>
                <div>
                    {/*<p className='uppercase tracking-widest text-stone-600'>Let's create together</p>*/}
                    <h1 className='py-4 text-stone-700'>
                        Hi, I&apos;m <span className='text-[#db2777]'>Chloé</span>
                    </h1>

                    <h2 className='py-2 text-stone-700'>
                    A Computer Science & Engineering Graduate
                    </h2>

                    <p className="text-stone-600 max-w-[70%] m-auto">
                        I&apos;m an enthusiastic, creative recent engineering graduate and fashionista with a love for culture, impactful technology, and beautiful things.{' '}
                        <Link href="/#projects" scroll={true}>
                            <span className="underline cursor-pointer hover:opacity-80">
                                Check out some of the things I&apos;ve been working on.
                            </span>
                        </Link>
                    </p>

                    {/*<p className='uppercase pt-10 tracking-widest text-[#9d174d]'>
                            Let&apos;s connect!
                    </p>*/}

                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                        <a href='https://www.linkedin.com/in/chloemorali/' target='_blank' rel='noopener noreferrer'>
                            <div className='rounded-full shadow-md shadow-stone-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>

                        <a href='https://github.com/cnmorali' target='_blank' rel='noopener noreferrer'>
                            <div className='rounded-full shadow-md shadow-stone-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>

                        <a href='mailto:chloenoormorali@gmail.com'>
                            <div className='rounded-full shadow-md shadow-stone-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </a>

                        <a href='/assets/Chloe-Morali-Resume.pdf' download>
                            <div className='rounded-full shadow-md shadow-stone-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main