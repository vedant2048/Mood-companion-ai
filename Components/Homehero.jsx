import React from 'react'
import Card from './Card'

function Homehero() {
  return (
    <div className='w-full h-screen p-2  text-white'>
      
        <div className=" font-playfair text-5xl flex flex-col justify-center items-center p-25 bg-zinc-700 rounded-4xl shadow-lg ring-2 ring-white/20 mx-2 mt-6">
            <h1>Select Your Mood Card !! </h1>
        </div>
        <Card />
    </div>
  )
}

export default Homehero