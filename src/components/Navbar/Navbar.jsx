import React , {useState} from 'react';
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai';

function Navbar() {
    const [nav , setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className='flex items-center justify-between h-24 mx-auto max-w-[1240px] px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Home</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Resources</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>About</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar