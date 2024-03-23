import React from 'react';
import {
    FaDribbble,
    FaFacebook,
    FaGithubSquare,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import Links from './Links';

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h2 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h2>
            <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam ratione fugiat, reprehenderit natus quisquam optio quae impedit debitis modi veniam dicta quo animi laudantium neque harum tempora. Quibusdam, enim?</p>
            <div className='flex justify-between  md:w-[75%] my-6'>
                <FaFacebook className='cursor-pointer' size={30} />
                <FaInstagram className='cursor-pointer' size={30} />
                <FaTwitter className='cursor-pointer' size={30} />
                <FaGithubSquare className='cursor-pointer' size={30} />
                <FaDribbble className='cursor-pointer' size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <Links></Links>
            <Links></Links>
            <Links></Links>
        </div>
    </div>
  )
}

export default Footer