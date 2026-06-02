import { motion } from 'framer-motion';
import React from 'react'
import { FaDatabase, FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
  const Skills = () => {
  return (
    <div>
         <article className='mt-10 flex justify-center md:items-start items-center flex-col'>
          <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once:false}}
          transition={{ duration: 0.5 }} 
           className='text-3xl text-[#7AF298] vk font-bold overflow-hidden' >Skills</motion.h1>
          <motion.h2
           initial={{y:20, opacity: 0 }}
          whileInView={{ y:0, opacity: 1 }}
          viewport={{ once:false}}
          transition={{ duration: 0.4}} 
          className='text-xl  text-gray-500 text-nowrap vk overflow-hidden '>Frontend Developer</motion.h2>
          
          <motion.div 
            initial={{  y:20, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            viewport={{ once:false }}
            transition={{ duration:0.5}}
          className=' grid grid-cols-2 md:grid-cols-4 gap-3'>
              <h1 className='flex flex-col   justify-center vk items-center gap-2'>
                <FaReact className='text-5xl  backdrop-blur-sm bg-gray-400/20   text-blue-100 mt-5 border rounded-2xl p-1 hover:scale-110 transition-transform duration-300  hover:shadow-md shadow-blue-700'/>
                <p className='text-gray-500 text-sm '>React js</p>
                </h1>
              <h1 className='flex flex-col justify-center items-center gap-2'>
            <RiTailwindCssFill className='text-5xl bg-gray-400/20 text-blue-100 mt-5 border rounded-2xl p-1 hover:scale-110 transition-transform duration-300  hover:shadow-md shadow-blue-700'/>
                <p className='text-gray-500 vk text-sm text-nowrap'>Tailwind CSS</p>
              </h1>
              <h1 className='flex flex-col justify-center vk items-center gap-2'>
              <FaDatabase className='text-5xl bg-gray-400/20 backdrop-blur-sm  text-blue-100 mt-5 border rounded-2xl p-1 hover:scale-110 transition-transform duration-300  hover:shadow-md shadow-blue-700'/>  
                <p className='text-gray-500 text-sm'>MongoDB</p>
              </h1>
              <h1 className='flex flex-col justify-center vk items-center gap-2'>
            <FaNodeJs className='text-5xl bg-gray-400/20 backdrop-blur-sm  text-blue-100 mt-5 border rounded-2xl p-1 hover:scale-110 transition-transform duration-300  hover:shadow-md shadow-blue-700'/>
               <p className='text-gray-500 text-sm'>Node.js</p>
              </h1>
          </motion.div>
        </article>
    </div>
  )
}

export default Skills