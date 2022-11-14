import React, { useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

import img1 from '../assets/img7.jpg'
import img2 from '../assets/img8.jpg'
import img3 from '../assets/img5.jpg'

const sliderData=[
  {
    url:img1,
  },
  {
    url:img2,
  },
  {
    url:img3,
  },
]

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length

  const prevSlide = ()=>{
    setSlide(slide === length - 1 ? 0 : slide +1);
  }
  const nextSlide = ()=>{
    setSlide(slide === length - 1 ? 0 : slide +1);
  }
  return (
    <div className='relative max-w-[1240px] mx-auto py-16 px-4 flex justify-center items-center'>
      <BsArrowLeftSquareFill onClick={prevSlide} className=' absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
      <BsArrowRightSquareFill onClick={nextSlide} className=' absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
      {sliderData.map((item,index)=>(
        <div key={index} className={` transition-all ease-out duration-[0.5s]  ${index === slide ? 'opacity-100':'opacity-0'}`}>
          {index === slide && (<img className=' w-full  rounded-md' src={item.url} alt="/" />)}
        </div>
      ))}
    </div>
  )
}

export default Slider
