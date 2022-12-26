import React from 'react'
import {IoChevronBack,IoChevronForward,IoSearch} from "react-icons/io5"

const Searchcomponent = () => {
  return (
    <div className='flex items-center justify-between gap-8 px-8 py-6'>
        
    <div className='flex items-center justify-center gap-4 '>
      <IoChevronBack className='text-xl text-textcolor hover:text-textdarkcolor'/>
      <IoChevronForward className='text-xl text-textcolor hover:text-textdarkcolor'/>
    </div>
    <div className='flex items-center justify-center gap-4 flex-grow bg-gray-200 px-4 py-2 rounded-full'>
        <IoSearch className='text-xl text-textcolor hover:text-textdarkcolor'/>
        <input className='border-none outline-none bg-transparent w-full text-textdarkcolor text-xl' type="text" placeholder='Search Song Name' />
    </div>
  </div>
  )
}

export default Searchcomponent