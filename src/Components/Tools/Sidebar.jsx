import React, { useState } from 'react'
import { RxCross2, RxComponent1 } from 'react-icons/rx'
const Sidebar = () => {
  const [open, setopen] = useState(true)
  return (
    <>
    <div className='md:hidden  fixed flex justify-end items-center px-4  h-20 z-[999] right-0 w-full '>
      <RxComponent1 className=' text-white text-xl' onClick={()=>{setopen(!open)}}/>
    </div>
    <div className={`bg-black-500/20 backdrop-blur-2xl flex md:hidden   flex-col h-screen fixed ${open? "translate-x-100" :"translate-x-0 "} transition-transform duration-300 ease-in-out z-[998] flex  items-end p-6  w-full  text-white`}>
      <ul className='text-xl h-fit w-full py-20 px-10 vk flex flex-col gap-6 font-extrabold text-white'>
        <li className='cursor-pointer hover:text-gray-400' onClick={() => handleMobileJump('Hero')}>HOME</li>
        <li className='cursor-pointer hover:text-gray-400' onClick={() => handleMobileJump('Projects')}>WORK</li>
        <li className='cursor-pointer hover:text-gray-400' onClick={() => handleMobileJump('Contact')}>CONTACT</li>
        <li className='cursor-pointer hover:text-gray-400' onClick={() => handleMobileJump('About')}>ABOUT</li>
      </ul>
    </div>
    </>
  )
}

export default Sidebar