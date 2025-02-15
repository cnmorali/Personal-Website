import React from 'react';
import '../globals.css';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto px-2 py-16 flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[#9d174d] text-center mb-12'>Skills</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-8'>
          {/* First Column: What I've Worked With */}
          <div className='space-y-4'>
            <h2 className='text-center text-xl font-semibold text-stone-800'>Technologies</h2>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Next.js</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>React Native</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Tailwind CSS</h3>
            </div>
            <div className='p-6 shadow-md shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Git</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Firebase</h3>
            </div>
          </div>

          {/* Second Column: Languages I Code In */}
          <div className='space-y-4'>
            <h2 className='text-center text-xl font-semibold text-stone-800'>Programming Languages</h2>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>C/ C++</h3>
            </div>
            <div className='p-6 shadow-md shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>MATLAB</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl  hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Python</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Assembly</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Java</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>JavaScript</h3>
            </div>
          </div>

          {/* Third Column: Languages I Speak */}
          <div className='space-y-4'>
            <h2 className='text-center text-xl font-semibold text-stone-800'>Languages</h2>
            <div className='p-6 shadow-md  shadow-stone-400 bg-stone-200 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>English (Fluent)</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>French (Fluent)</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Mandarin (Intermediate)</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:bg-stone-100 transition duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Korean (Beginner)</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
