import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img7.jpg'
import SelectCards from './SelectCards'

const Selects = () => {
  return (
    <div className=' max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectCards bg={img1} text='Bora Bora'/>
      <SelectCards bg={img2} text='Maldives'/>
      <SelectCards bg={img3} text='Antigua'/>
      <SelectCards bg={img4} text='Cozumel'/>
      <SelectCards bg={img5} text='Jamaica'/>
      <SelectCards bg={img6} text='Key West'/>
    </div>
  )
}

export default Selects
