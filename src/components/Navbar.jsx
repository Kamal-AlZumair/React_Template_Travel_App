import React, { useState } from 'react'
import {BsPerson,BsSearch} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenu} from 'react-icons/hi'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo,setLogo] = useState(false);

  const handelNav = ()=>{
    setNav(!nav);
    setLogo(!logo)
  }
  return (
    <nav className=' flex w-full justify-between items-center h-20 px-4 absolute z-10'>
      <div className=' '>
        <h1 onClick={handelNav} className={`${logo ? 'hidden' : 'block'} uppercase text-white`}>Beaches.</h1>
      </div>
      <div>
        <ul className='hidden md:flex'>
          <li className='text-white'>Home</li>
          <li className='text-white'>Destination</li>
          <li className='text-white'>Travel</li>
          <li className='text-white'>View</li>
          <li className='text-white'>Book</li>
        </ul>
      </div>
      <div className=' hidden md:flex'>
        <BsSearch size={20} className=' text-white mr-2'/>
        <BsPerson size={20} className='text-white'/>
      </div>

      {/* mobile nav menu */}
      <div onClick={handelNav} className=' md:hidden z-10'>
        {nav ? <AiOutlineClose className=' text-black' size={20}/> : <HiOutlineMenu className=' text-white'  size={20}/>}
      </div>

      <nav onClick={handelNav} className={nav ? 'absolute left-[0]  transition-all duration-[0.5s] ease-in top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'}>
      <ul className=''>
        <h1 className=' uppercase '>Beaches.</h1>
          <li className=' border-b'>Home</li>
          <li className=' border-b'>Destination</li>
          <li className=' border-b'>Travel</li>
          <li className=' border-b'>View</li>
          <li className=' border-b'>Book</li>
          <div className='flex gap-8 flex-row my-4'>
            <button className='flex-1'>Search</button>
            <button className='flex-1'>Account</button>
          </div>
          <div className=' flex justify-between mt-8'>
            <FaFacebook className='icon'/>
            <FaTwitter className='icon'/>
            <FaInstagram className='icon'/>
            <FaYoutube className='icon'/>
          </div>
        </ul>
      </nav>
    </nav>
  )
}

export default Navbar
