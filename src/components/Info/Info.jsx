import React from 'react';

function Info() {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 rounded-2xl shadow-lg' src="images/img (5).jpg" alt="/" />
            <div className='flex flex-col justify-center pl-3 mx-auto'>
                <p className='uppercase text-[#00df9a] font-bold'>learning react is awesome</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem beatae sed, omnis fugit voluptas quam, hic fugiat distinctio placeat id excepturi ullam quae! Quo velit doloribus excepturi vero quos?</p>
                <button className='bg-black text-[#00df9a] mx-auto md:mx-0 w-[200px] rounded-md my-6 font-medium px-6 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Info