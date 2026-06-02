import React from 'react'
import { motion } from 'framer-motion'
const WorkTile = ({ src={}, alt="", title="",className="", description=""}) => {
  
  return (
    <motion.article 
    initial={{ y:10,scale:0.8 , opacity:0.2,}}
    whileInView={{ y:0 ,scale:1, opacity:1}}
    viewport={{once:false}}
    transition={{duration:1,}}
    className='relative mt-10 
     flex flex-col z-2 backdrop-blur-md
     p-2 min-h-50 overflow-hidden bg-white/10  
   text-white justify-between items-start border
    rounded-2xl border-white/40 '>
        <img src={src} alt={alt} className={`className z-9 rounded-2xl hover:scale-105 transition-transform duration-800 ${className} `}/>
        <h1 className='text-4xl text-left z-9 vk m-3 font-bold text-[#7AF298]'>{title}</h1>
        <p className='vk z-9'>{description}</p>
        <div className='h-50 w-50 z-1 blur-3xl rounded-full bottom-0  right-0 absolute bg-blue-500 '></div>
    </motion.article>
  )
}

export default WorkTile