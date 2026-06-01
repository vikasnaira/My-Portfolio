import React from 'react'
import ProTile from './Tools/ProTile'
import { motion } from 'framer-motion'
motion
const Procedes = () => {
  return (
    <motion.article 
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:false}}
    transition={{duration:0.5}}
    className="flex flex-col mt-10 px-6 md:px-15">
      <h1 className='md:text-4xl text-2xl   text-white md:text-right font-bold vk md:p-5'>MY WORK DEVELOPMENT <br /> WORK PROCESS</h1>
      <hr className="border-gray-600 mt-7 border" />
      <div className="grid md:grid-cols-3  gap-5 grid-cols-1 mt-5 ">
      <ProTile Num="01" Heading="Plan & Architect" Description="Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints." />
      <ProTile Num="02" Heading="Build & Develop" Description="Build pixel-perfect user interfaces . I ensure that every component—UI or API—is maintainable." />
      <ProTile Num="03" Heading="Launch & Support" Description="I also provide post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing." />
      </div>
    </motion.article>
  )
}

export default Procedes