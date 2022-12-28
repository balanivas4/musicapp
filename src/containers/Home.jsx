import React from 'react'
import { Leftcontainer, Middlecontainer, Rightcontainer } from '../components';



const Home = () => {
  return (
    <main className='w-screen min-h-screen grid grid-cols-12 gap-1 bg-primary'>
     <Leftcontainer/>
     <Middlecontainer/>
     <Rightcontainer/>
     
      </main>
  )
};


export default Home