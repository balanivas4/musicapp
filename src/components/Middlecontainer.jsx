import React from 'react'
import Bannercomponent from './Bannercomponent'
import Searchcomponent from './Searchcomponent'


const Middlecontainer = () => {
  return (
    <div className='col-span-8'>
      {/* search section */}
      <Searchcomponent/>
      <Bannercomponent/>
    
    </div>
  )
}

export default Middlecontainer