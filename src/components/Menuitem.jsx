import React from 'react'

const Menuitem = ({icon,name,uri}) => {
  return (
    <div className='w-full flex items-center gap-4'>
        {icon} <p>{name}</p>
    </div>
  )
}

export default Menuitem