import { motion } from 'framer-motion';
import React from 'react'
import { FaWhatsapp ,FaGithub, FaEnvelope} from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
const Social = () => {

  const WhatsappNumber = "8198947026";
  const WhatsappLink = `https://wa.me/${WhatsappNumber}`;
  return (
    <motion.article
    initial={{x:150}}
    whileInView={{x:0}}
    transition={{duration:0.5}}

    className="relative flex flex-col  items-center md:items-start w-full md:w-fit">

      <hr className=' bg-gray-500 w-full md:hidden'/>

        <h1 className='text-3xl text-[#7AF298] font-bold w-fit hidden md:block' >Social Links</h1>
      <hr className=' bg-gray-500 w-full hidden md:block mt-7'/>
        
        <div className=" justify-between md:justify-center md:w-fit w-full px-8 items-start vk md:gap-15  flex">
        <ul className=' mt-12  flex flex-col items-start md:items-end gap-5 font-medium '>
            <li className='text-xs flex gap-2 items-center  text-gray-600'><FaWhatsapp  className="text-green-500 text-xl"/><h1 className='hidden md:block'>Whatsapp</h1></li>
            <li className='text-xs flex gap-2 items-center text-gray-600'><FaEnvelope  className="text-blue-500 text-lg "/><h1 className='hidden md:block'>MAIL</h1></li>
            <li className='text-xs flex gap-2 items-center text-gray-600'><FaGithub className='text-white text-lg'/><h1 className='hidden md:block'>GITHUB</h1></li>
            <h1 className='text-md md:flex hidden bg-white/20 py-2 rounded-full border border-gray-500  gap-2 items-center text-white font-light px-3' style={{boxShadow:"inset 1px 1px 1px skyBlue , 1px 1px 1px black"}}>Get My Resume</h1>

        </ul>


     <div className=' mt-12 flex flex-col gap-5 text-sm font-medium text-gray-600'>
      <a href={WhatsappLink} target="_blank" rel="noopener noreferrer">
        +91 8198947026
      </a>
            <a href="mailto:vikasnaira1322@gmail.com">
              Vikasnaira1322@gmail.com
            </a>
            <a href="https://github.com/vikasnaira">
              vikasnaira.github.io
            </a>
            <a href="https://drive.google.com/file/d/1Mc3V_3pGY7XX3uj9g9S371TWn5suUOtr/view?usp=drive_link">
                 <button className='md:flex gap-4 py-2 hidden  bg-green-500 rounded-full px-4 items-center font-medium text-white'><GrDocumentUser/>Resume</button>
            </a>
        </div>
        </div>
          <motion.a 
          initial={{ opacity: 0, y:30 }}
          whileInView={{opacity:1, y:0}}
          viewport={{ once:false }}
          transition={{ duration: 0.4 }}
          id='Resume'
          href="https://drive.google.com/file/d/1Mc3V_3pGY7XX3uj9g9S371TWn5suUOtr/view?usp=drive_link">
                 <button className='flex w-[100vw] md:hidden gap-4 py-4 text-xl items-center bg-white/20  backdrop-2xl justify-center font-medium text-white'><GrDocumentUser/>Get My Resume</button>
            </motion.a>
    </motion.article>
  )
}

export default Social