import React from 'react';
import Image from 'next/image';
import checkmatesImg from '/public/assets/projects/IoTsolate.jpg';
import '../app/globals.css';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const iotsolate = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={checkmatesImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2>IoTsolate: Network Microsegmentation for Securing and Managing IoT Devices</h2>
                    <h3>OpenWrt, React Native, and Expo Go</h3>
                </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <br></br>
          <p>IoTsolate is a tool my partner and I developed to protect IoT devices from the increasing number of cyber attacks they face daily.</p>
          <br></br>
          <p>IoTsolate uses VLAN microsegmentation to identify, isolate, and neutralize security risks as soon as they appear. The IoTsolate app provides a clear view of the different network segments, showing all connected devices and their communication privileges, making it easy for users to understand and manage their network configuration.</p>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-stone-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenWrt
              </p>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />  TP-Link Archer C7 Router
              </p>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />  VLANs
              </p>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />  React Native / Expo Go
              </p>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />  Firebase
              </p>
              <p className='text-stone-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Network Protocols
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

export default iotsolate