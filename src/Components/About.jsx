import React from 'react'
import Skills from './Tools/Skills';
import Education from './Tools/Education';
const About = () => {
  return (
    <div>
      <article className="text-white md:p-15 p-2 mt-15 flex justify-between relative flex-col md:flex-row gap-10">
      <div
       className='absolute 
       h-50 w-50 md:h-120 
       md:w-120 bg-blue-500/50
        -right-40 bottom-0  rounded-full
         blur-3xl
        '>
         </div>

        <div className="AboutImg relative md:w-1/2 gap-25 w-full  h-140 overflow-hidden flex flex-col  items-center">
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
  <h3>HELLOW IM</h3>
        <h1 className='vk font-bold  text-3xl text-[#7AF298]'>Vikas naira</h1>
</span>
        <img src="vikas.png" alt="Vikas Naira" className='md:h-150 md:w-70 z-2  w-50 h-100' />
        </div>

        <div className="AboutText w-full md:w-1/2 ">
      
        <div className=" flex justify-center items-center md:justify-start md:items-start flex-col">

          <h1 className='vk text-3xl text-[#7AF298] font-bold mb-5'>
            About Me
          </h1>
          <p className='text-gray-300 text-center md:text-left '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nemo, libero 
            commodi magnam dolore voluptate quo numquam similique,
             vero voluptatibus ex voluptates inventore laudantium placeat of
             ficia quis assumenda incidunt fugit soluta officiis enim illum aperiam
              qui consequatur? Dolorum pariatur a at fugit nemo, assumenda culpa delectus 
              nisi labore, laudantium debitis.
          </p>

        </div>


          <section className='mt-10'>
          <Skills/>
          </section>

          <section className='mt-10'>
            <Education/>
          </section>
       
        </div>
      </article>
    </div>
  )
}

export default About