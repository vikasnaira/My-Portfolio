import { motion } from 'framer-motion'
import React from 'react'
const ProTile = ({Num="", Heading="", Description=""}) => {
  return (
    <motion.article
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:false}}
    transition={{duration:0.5}}
     className='text-white overflow-hidden md:border-b-0 border-b py-3 md:px-4 px-0 md:border-r'>
    <h1 className="text-8xl py-15 w-fit md:-translate-x-15 -translate-x-10 hover:rotate-12 hover:-translate-x-5 font-bold vk text-[#7AF298]">{Num}</h1>
    <h2 className="text-2xl font-bold mb-2 text-[#7AF298]">{Heading}</h2>
    <p className="text-gray-400 text-sm  vk">{Description}</p>
    </motion.article>
  )
}

export default ProTile