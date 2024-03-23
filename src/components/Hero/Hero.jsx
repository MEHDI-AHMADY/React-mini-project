import React from 'react';
import { ReactTyped } from 'react-typed';

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold p-2 md:text-5xl sm:text-4xl'>LEARN REACT WITH CODING</h1>

            <div className='flex justify-center py-4'>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold text-gray-500'>JUST</p>
                <ReactTyped className='md:text-4xl sm:text-3xl text-xl font-bold pl-2 text-gray-500' strings={['SLEEP , DRINK COFFEE , CODE']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <button className='bg-[#00df9a] mx-auto w-[200px] rounded-md my-6 font-medium px-6 py-3 text-black hover:bg-[#10c68f]'>Get Started</button>

        </div>
    </div>
  )
}

export default Hero