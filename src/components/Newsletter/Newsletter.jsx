import React from 'react';

function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='col-span-1 lg:col-span-2 my-4'>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Want some channels to practice and learn REACT?
                </h2>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md sm:ml-4 my-6 font-medium px-6 py-3 text-black hover:bg-[#10c68f]'>Notify Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter