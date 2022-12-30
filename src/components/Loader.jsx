import React from 'react'
import LoaderSVG from '../assets/video/Triangles-1.5s-800px.svg'

const Loader = () => {
  return (
    <div className='w-screen h-screen flex justify-center overflow-hidden bg-gray-100'><img src={LoaderSVG} alt="" /></div>
  )
}

export default Loader