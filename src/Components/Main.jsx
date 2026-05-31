import React from 'react'
import Work from './Tools/Work'
const Main = () => {
  return (
    <div className='bg-black px-25 w-full flex-1 cursor-none'>
      <p className=' border-b py-5 text-gray-500 border-gray-300 '>Recent works </p>
      <Work Project={"Weather App"} Theme={"Entertainment"}/>
      <Work Project={"Image Enhancher"} Theme={"Entertainment"}/>
      <Work Project={"Image Generator"} Theme={"Entertainment"}/>
      <Work Project={"Task Manager App"} Theme={"Entertainment"}/>
      <Work Project={"Zentry Clone"} Theme={"Entertainment"}/>
      <Work Project={"Login page"} Theme={"Entertainment"}/>
</div>
  ) 
}

export default Main