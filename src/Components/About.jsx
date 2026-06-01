import React from 'react'
import Skills from './Tools/Skills';
import Education from './Tools/Education';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div>
      <motion.article  
        initial={{  y:-120 }}
        whileInView={{ y: 0 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }}
      className="text-white md:p-15 p-2 mt-30 flex justify-between relative flex-col md:flex-row gap-10" >
      <div
       className='absolute 
       h-50 w-50 md:h-120 
       md:w-120 bg-blue-500/50
        -right-40 bottom-0  rounded-full
         blur-3xl
        '>
         </div>

        <div className="AboutImg relative md:w-1/2 gap-20 w-full  h-95 md:h-140 overflow-hidden flex flex-col  items-center" >
        <div
         className="bg-blue-500 
          md:h-70 
          md:w-50
         h-40 w-30
          md:top-[30%] 
          top-[30%] 
          absolute left-[30%]
         rounded-full blur-3xl 
           "  ></div>
<span>
  <motion.h3 
  initial={{ opacity: 0, y:-20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once:false}}
  transition={{ duration: 0.5 }}
   className='text-sm text-gray-500 text-center'>
    HELLOW IM</motion.h3>


        <motion.h1 initial={{ opacity: 0, y:-40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once:false}}
          transition={{ duration: 0.2 }} 
          className='vk font-bold  text-3xl text-[#7AF298]'>
          Vikas naira</motion.h1>
</span>
        <motion.img 
        initial={{ opacity: 0, y:20 , x:-120 , scale:0.8 }}
        whileInView={{ opacity: 1, y: 0 , scale:1 , x:0 }}
        viewport={{ once:false}}
        transition={{ duration: 0.5 }}
        src="vikas.png" alt="Vikas Naira" className='md:h-150 md:w-70 z-2  w-40 h-100' />
        </div>

        <div className="AboutText w-full md:w-1/2">
      
        <div className=" flex justify-center  shadow-orange-50 items-center md:justify-start md:items-start flex-col">

          <motion.h1 
          initial={{ opacity: 0, width:0 }}
          whileInView={{ opacity: 1, width: 'auto' }}
          viewport={{ once:false}}
          transition={{ duration: 0.9 }}
          className='vk text-3xl text-nowrap overflow-hidden
           text-[#7AF298] font-bold mb-5'>
            About Me
          </motion.h1>
          <motion.p
          initial={{ opacity: 0, y:20 ,scale:0.8 }}
          whileInView={{ opacity: 1, y: 0 , scale:1 }}
          viewport={{ once:false}}
          transition={{ duration: 0.5 }}
           className='text-gray-300 text-center md:text-left '>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nemo, libero 
            commodi magnam dolore voluptate quo numquam similique,
             vero voluptatibus ex voluptates inventore laudantium placeat of
             ficia quis assumenda incidunt fugit soluta officiis enim illum aperiam
              qui consequatur? Dolorum pariatur a at fugit nemo, assumenda culpa delectus 
              nisi labore, laudantium debitis.
          </motion.p>

        </div>


          <section className='mt-10'>
          <Skills/>
          </section>

          <section className='mt-10'>
            <Education/>
          </section>
      
        </div>
      </motion.article>
    </div>
  )
}

export default About