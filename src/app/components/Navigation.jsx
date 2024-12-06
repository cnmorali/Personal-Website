import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import '../globals.css';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow,setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return(
        <div className={shadow ? 'fixed w-full h-20 shadow-md z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items center w-full h-full px-2 2xl:px-16'> 
                <Link href='/'>
                    <Image 
                        src='/assets/CNM.png' 
                        alt='/' 
                        width='146' 
                        height='34' 
                    />               
                </Link>

            <div className='pt-7 px-5'>
                <ul className='hidden md:flex text-stone-700'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b text-[#9d174d]'>Home</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b text-[#9d174d]'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b text-[#9d174d]'>Projects</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e7e5e4] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    {/* Sidebar logo */}
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/'>
                            <Image 
                                src='/assets/CNM.png' 
                                alt='/' 
                                width='110' 
                                height='26' 
                            />
                        </Link>
                        <div onClick={handleNav} className='rounded-full shadow-md shadow-stone-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>

                    {/* Sidebar cute quote
                    <div className='border-b border-stone-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s create together!</p>
                    </div>*/}
                </div>

                {/* Sidebar list navigation bar */}
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                    <Link href='/'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm text-[#9d174d]'>Home</li>
                    </Link>
                    <Link href='/#skills'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm text-[#9d174d]'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm text-[#9d174d]'>Projects</li>
                    </Link>
                    </ul>

                    {/* Sidebar connect with me */}
                    <div className='pt-10'>

                    <div className='flex justify-center items-center gap-6 mt-4'>
                        <div className='rounded-full shadow-md shadow-stone-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'>
                        <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-md shadow-stone-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'>
                        <FaGithub />
                        </div>
                        <div className='rounded-full shadow-md shadow-stone-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'>
                        <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-md shadow-stone-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'>
                        <BsFillPersonLinesFill />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar