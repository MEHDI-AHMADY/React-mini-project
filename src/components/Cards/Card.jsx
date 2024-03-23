import React from 'react';
import { AiFillAndroid } from "react-icons/ai";

function Card({title , price , special , icon}) {
    const cardClassName = special ? 'bg-gray-100' : '';
    

  return (
    <div>
         <div className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ${cardClassName}`}>
                <AiFillAndroid className={`text-6xl mx-auto mt-[-2.5rem] bg-white ${special ? 'bg-transparent' : 'bg-white'}`} />
                <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
                <p className='text-center text-4xl font-bold'>{price}</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Some Text</p>
                    <p className='py-2 border-b mx-8 mt-8'>Some Text</p>
                    <p className='py-2 border-b mx-8 mt-8'>Some Text</p>
                </div>
                <button className='bg-[#00df9a] mx-auto w-[200px] rounded-md my-6 font-medium px-6 py-3 text-black hover:bg-[#10c68f]'>Buy</button>
            </div>
    </div>
  )
}

export default Card