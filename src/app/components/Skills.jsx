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
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>React Native</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Next.js</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Tailwind CSS</h3>
            </div>
            <div className='p-6 shadow-md shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Git</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Firebase Firestore</h3>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Google Cloud Authentication</h3>
            </div>
          </div>

          {/* Second Column: Languages I Code In */}
          <div className='space-y-4'>
            <h2 className='text-center text-xl font-semibold text-stone-800'>Programming Languages</h2>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>C/ C++</h3>
              <p className='text-center text-sm text-stone-500'>Proficient</p>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl  hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>JavaScript</h3>
              <p className='text-center text-sm text-stone-500'>Experienced</p>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Assembly</h3>
              <p className='text-center text-sm text-stone-500'>Familiar</p>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Python</h3>
              <p className='text-center text-sm text-stone-500'>Familiar</p>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Java</h3>
              <p className='text-center text-sm text-stone-500'>Learning</p>
            </div>
          </div>

          {/* Third Column: Languages I Speak */}
          <div className='space-y-4'>
            <h2 className='text-center text-xl font-semibold text-stone-800'>Languages</h2>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>English</h3>
              <p className='text-center text-sm text-stone-500'>Fluent</p>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>French</h3>
              <p className='text-center text-sm text-stone-500'>Fluent</p>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Mandarin</h3>
              <p className='text-center text-sm text-stone-500'>Intermediate</p>
            </div>
            <div className='p-6 shadow-md  shadow-stone-400 rounded-xl hover:opacity-80 transition-opacity duration-300'>
              <h3 className='text-center text-stone-700 font-normal'>Korean</h3>
              <p className='text-center text-sm text-stone-500'>Beginner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
