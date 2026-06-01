import { motion } from 'framer-motion'
import React from 'react'
const InstantProject = () => {
  return (
    <article className='flex flex-col justify-center items-center gap-5 mt-10 relative w-full'>
      <motion.h1 
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: 'auto', opacity: 1 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }} 
        className="text-4xl text-center font-bold overflow-hidden text-[#7AF298]">INSTANT PROJECTS <br /> OVERVIEW</motion.h1>

      <div className='absolute h-500 w-20 md:h-150 md:w-150 bg-blue-500/80  left-[50%] md:top-[20%] rounded-full blur-3xl'>

      </div>
       
      {/* Grid hata kar CSS Columns (Pinterest Style) lagaya hai */}
      <div className="projectGrid z-2 columns-1 sm:columns-2 md:columns-2 lg:columns-4 md:p-20 p-10 max-w-7xl w-full mx-auto ">

        <motion.img 
        initial={{  opacity: 0, scale:0.9, y:100 }}
        whileInView={{  opacity: 1 , scale:1 , y:0 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }}
        src="Music.webp" alt="" className='w-full h-30 object-cover  border-5 border-white/20   hover:scale-103  transition-all duration-300  rounded-lg mb-4 break-inside-avoid block'/>
        <motion.img 
        initial={{  opacity: 0, scale:0.9, y:100 }}
        whileInView={{  opacity: 1 , scale:1 , y:0 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }}
        src="./Photos/PhotoGen.jpg" alt="" className='w-full h-auto   border-4 border-white/20  hover:scale-103  transition-all duration-300  object-cover rounded-lg mb-4 break-inside-avoid block'/>
        <motion.img 
        initial={{  opacity: 0, scale:0.9, y:100 }}
        whileInView={{  opacity: 1 , scale:1 , y:0 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }}
        src="./Photos/Weather.jpg" alt="" className='w-full h-auto   border-4 border-white/20   hover:scale-103  transition-all duration-300  object-cover rounded-lg mb-4 break-inside-avoid block'/>
        <motion.img 
        initial={{  opacity: 0, scale:0.9, y:100 }}
        whileInView={{  opacity: 1 , scale:1 , y:0 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }}
        src="./Photos/Ai.jpg" alt="" className='w-full h-auto      border-4 border-white/20    hover:scale-103  transition-all duration-300 object-cover rounded-lg mb-4 break-inside-avoid block'/>
        <motion.img 
        initial={{  opacity: 0, scale:0.9, y:100 }}
        whileInView={{  opacity: 1 , scale:1 , y:0 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }}
        src="./Photos/Login.jpg" alt="" className='w-full h-107    border-4 border-white/20    hover:scale-103  transition-all duration-300 object-cover rounded-lg mb-4 break-inside-avoid block '/>
        <motion.img 
        initial={{  opacity: 0, scale:0.9, y:100 }}
        whileInView={{  opacity: 1 , scale:1 , y:0 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }}
        src="./Photos/enh.jpg" alt="" className='w-100 h-auto     border-4 border-white/20     hover:scale-103  transition-all duration-300  object-cover rounded-lg mb-4 break-inside-avoid block '/>
        <motion.img 
        initial={{  opacity: 0, scale:0.9, y:100 }}
        whileInView={{  opacity: 1 , scale:1 , y:0 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }}
        src="./Photos/vk.jfif" alt="" className='w-full h-50     border-4 border-white/20      hover:scale-103  transition-all duration-300  object-cover rounded-lg mb-4 break-inside-avoid block'/>
        <motion.img 
        initial={{  opacity: 0, scale:0.9, y:100 }}
        whileInView={{  opacity: 1 , scale:1 , y:0 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }}
        src="./Photos/Weather.jpg" alt="" className='w-full  border-4 border-white/20       hover:scale-103  transition-all duration-300  h-auto object-cover rounded-lg mb-4 break-inside-avoid block'/>
        
      </div>
    </article>
  )
}

export default InstantProject
