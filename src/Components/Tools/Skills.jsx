import React from 'react'
import { FaDatabase, FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div>
         <article className='mt-10 '>
          <h1 className='text-3xl text-[#7AF298] font-bold' >Skills</h1>
          <h2 className='text-xl  text-gray-500 mt-8'>Frontend Developer</h2>

          <div className=' flex gap-5'>
              <h1 className='flex flex-col   justify-center items-center gap-2'>
                <FaReact className='text-5xl backdrop-blur-sm bg-gray-400/20   text-blue-100 mt-5 border rounded-2xl p-1 hover:scale-110 transition-transform duration-300  hover:shadow-md shadow-blue-700'/>
                <p className='text-gray-500 text-sm'>React js</p>
                </h1>
              <h1 className='flex flex-col justify-center items-center gap-2'>
            <RiTailwindCssFill className='text-5xl bg-gray-400/20 text-blue-100 mt-5 border rounded-2xl p-1 hover:scale-110 transition-transform duration-300  hover:shadow-md shadow-blue-700'/>
                <p className='text-gray-500 text-sm text-nowrap'>Tailwind CSS</p>
              </h1>
              <h1 className='flex flex-col justify-center items-center gap-2'>
              <FaDatabase className='text-5xl bg-gray-400/20 backdrop-blur-sm  text-blue-100 mt-5 border rounded-2xl p-1 hover:scale-110 transition-transform duration-300  hover:shadow-md shadow-blue-700'/>  
                <p className='text-gray-500 text-sm'>MongoDB</p>
              </h1>
              <h1 className='flex flex-col justify-center items-center gap-2'>
            <FaNodeJs className='text-5xl bg-gray-400/20 backdrop-blur-sm  text-blue-100 mt-5 border rounded-2xl p-1 hover:scale-110 transition-transform duration-300  hover:shadow-md shadow-blue-700'/>
               <p className='text-gray-500 text-sm'>Node.js</p>
              </h1>
          </div>
        </article>
    </div>
  )
}

export default Skills