import React, { useState } from 'react'
import { RxCross2, RxComponent1 } from 'react-icons/rx'
const Sidebar = () => {
  const [open, setopen] = useState(true)
  const handleMobileJump = (id)=>{
    setopen(!open);
  }
  return (
    <>
    <div className='md:hidden  fixed flex justify-end items-center px-4  h-20 z-[999] right-0 w-full '>
      <RxComponent1 className=' text-white text-xl' onClick={()=>{setopen(!open)}}/>
    </div>
    <div className={`bg-black-500/20 backdrop-blur-2xl flex md:hidden   flex-col h-screen fixed ${open? "translate-x-1000" :"translate-x-0 "} transition-transform duration-300 ease-in-out z-[998] flex  items-end p-6  w-full  text-white`}>
      <ul className='text-xl h-fit w-full py-20 px-10 vk flex flex-col gap-6 font-extrabold text-white'>
        <a href='#Hero' className='cursor-pointer hover:text-gray-400' onClick={() => handleMobileJump()}>HOME</a>
        <a href='#Projects' className='cursor-pointer hover:text-gray-400' onClick={() => handleMobileJump()}>WORK</a>
        <a href='#About' className='cursor-pointer hover:text-gray-400' onClick={() => handleMobileJump()}>ABOUT</a>
        <a href='#Contact2' className='cursor-pointer hover:text-gray-400' onClick={() => handleMobileJump()}>CONTACT</a>
        <a href='#Resume' className='cursor-pointer hover:text-gray-400' onClick={() => handleMobileJump()}>RESUME</a>
      </ul>
    </div>
    </>
  )
}

export default Sidebar