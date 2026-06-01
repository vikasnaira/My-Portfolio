import React from 'react'
import InstantProject from './InstantProject'
import WorkTile from './Tools/WorkTile'
import { motion } from 'framer-motion'
const Works = () => {
  return (
    <article>
      <InstantProject/>
      <motion.div
      initial={{ y:100,}}
      whileInView={{y:0}}
      viewport={{once:false}}
      transition={{duration:0.5,delay:0.3}}
      className='flex flex-col'>
         <h1 className='md:text-6xl text-4xl px-4 text-[#7AF298] vk font-bold text-end mt-20'>
        LATEST
      </h1>
      <h1 className='md:text-6xl text-3xl px-4 text-[#7AF298] vk font-bold text-end'>
        PROJECTS
      </h1>
      </motion.div >
      <div 
      
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 md:gap-6 mt-10 px-3 md:px-30 max-w-7xl w-full mx-auto'>
        <WorkTile src="Music.webp" alt="PhotoGen" title="MUSIC APP" description="A AI-powered image generation app that creates stunning visuals from text prompts, utilizing advanced machine learning algorithms to bring your ideas to life."/>
        <WorkTile src="./Photos/Ai.jpg" alt="PhotoGen" title="AI CHAT BOT" description="A AI-powered image generation app that creates stunning visuals from text prompts, utilizing advanced machine learning algorithms to bring your ideas to life."/>
        <WorkTile src="./Photos/Weather.jpg" alt="PhotoGen" className="w-full h-100 object-cover " title="WEATHER APP" description="A AI-powered image generation app that creates stunning visuals from text prompts, utilizing advanced machine learning algorithms to bring your ideas to life."/>
        <WorkTile src="./Photos/enh.jpg"     alt="PhotoGen" title="IMAGE ENHANCER APP" description="A AI-powered image generation app that creates stunning visuals from text prompts, utilizing advanced machine learning algorithms to bring your ideas to life."/>
        <WorkTile src="./Photos/Miranda.jpg" alt="PhotoGen" className='w-full' title="MIRANDA UI LANDING PAGE" description="A AI-powered image generation app that creates stunning visuals from text prompts, utilizing advanced machine learning algorithms to bring your ideas to life."/>
        <WorkTile src="./Photos/Zentry.jpg" className='w-full' alt="PhotoGen" title="ZENTRY </> LANDING PAGE" description="A AI-powered image generation app that creates stunning visuals from text prompts, utilizing advanced machine learning algorithms to bring your ideas to life."/>
        <WorkTile src="./Photos/PhotoGen.jpg" className='w-full h-80 object-cover object-top'  alt="PhotoGen" title="IMAGE </> GENERATOR AI" description="A AI-powered image generation app that creates stunning visuals from text prompts, utilizing advanced machine learning algorithms to bring your ideas to life."/>
        <WorkTile src="./Photos/Login.jpg" className='w-full' alt="PhotoGen" title="AUTHORIZED ANIM LOGIN PAGE " description="A AI-powered image generation app that creates stunning visuals from text prompts, utilizing advanced machine learning algorithms to bring your ideas to life."/>
      </div>
    </article>
  )
}

export default Works