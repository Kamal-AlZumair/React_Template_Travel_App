import React from 'react'
import BeachBg from '../assets/tropical beach loop extended.mp4'
import {BsSearch} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='h-full w-full object-cover' src={BeachBg} autoPlay loop muted/>
      <div className=' absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 '>
        <h1 className=''>First Class Travel</h1>
        <h2 className=' py-2 text-3xl font-bold'>Top 1% locations World Wide</h2>
        <form className=' flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
          <div>
            <input className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none' type="text" placeholder='Search Destinations'/>
          </div>
          <div>
            <button><BsSearch size={20} className='icon' style={{color: 'white'}}/></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero
