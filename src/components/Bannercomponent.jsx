import React from 'react'
import weeknd from "../assets/img/bg.jpg"

function Bannercomponent() {
  return (
    <div>
        <div className='w-full h-72 bg-black rounded-3xl overflow-hidden'>
            <img src={weeknd} alt="" className='w-full h-full object-cover'/>
            </div>

    </div>
  )
}

export default Bannercomponent