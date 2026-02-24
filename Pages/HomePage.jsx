


import React from 'react'
import Card from '../Components/Card'

function HomePage() {
  return (
    <div className='w-full h-screen p-2 bg-zinc-900 text-white'>
      
        <div className=" font-playfair text-5xl flex flex-col justify-center items-center p-25 bg-zinc-700 rounded-4xl shadow-lg ring-2 ring-white/20 mx-2 mt-6">
            <h1>Select Your Mood Card !! </h1>
        </div>
        <Card />
    </div>
  )
}

export default HomePage