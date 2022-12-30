import React from 'react'
import {Bannercomponent,Searchcomponent} from "../components"


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