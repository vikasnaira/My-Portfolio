import { motion } from 'framer-motion'
import React from 'react'
const Education = () => {
  return (
    <article className="p-5 md:p-0 flex flex-col items-center md:items-start justify-center mt-10">
      <motion.h1
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once:false}}
      transition={{ duration: 0.5 }} 
       className='text-3xl text-[#7AF298] vk font-bold'>Other Libraries</motion.h1>
      <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y:0, opacity: 1 }}
      viewport={{ once:false}}
      transition={{ duration: 0.5 }} 
      className='flex gap-4 mt-5 text-gray-500 vk overflow-hidden  md:justify-start justify-center flex-wrap'>
      <h2>Tailwind css</h2>
      <h2>Gsap</h2>
      <h2>Framer Motion</h2>
      <h2>Next.js</h2>
      </motion.div>
    </article>
  )
}

export default Education