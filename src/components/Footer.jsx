import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' w-full bg-gray-100 py-16'>
      <div className=' max-w-[1240px] mx-auto px-4 flex flex-col'>
        <div className=' sm:flex text-center justify-between items-center'>
          <h1>BEACHES.</h1>
          <div className='flex justify-between w-full sm:max-w-[240px] my-4'>
            <FaFacebook className='icon'/>
            <FaTwitter className='icon'/>
            <FaInstagram className='icon'/>
            <FaYoutube className='icon'/>
          </div>
        </div>
        <div className=' flex justify-between'>
          <ul className=' lg:flex'>
            <li>About</li>
            <li>PartnerShips</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className=' lg:flex text-right'>
          <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
