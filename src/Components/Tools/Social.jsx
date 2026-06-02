import React from 'react'
import { FaWhatsapp ,FaGithub, FaEnvelope} from "react-icons/fa";
const Social = () => {

  const WhatsappNumber = "8198947026";
  const WhatsappLink = `https://wa.me/${WhatsappNumber}`;
  return (
    <article className="relative flex flex-col px-4 items-center md:items-start w-full md:w-fit">


      <hr className=' bg-gray-500 w-full md:hidden'/>

      <div className='flex md:hidden py-5 text-xs justify-between font-thin w-full p-2'>
        <button>+91 8198947026</button>
        <button>Vikasnaira1322@gmail.com</button>
      </div>


        <h1 className='text-3xl text-[#7AF298] font-bold w-fit hidden md:block' >Social Links</h1>
      <hr className=' bg-gray-500 w-full hidden md:block mt-7'/>
        
        <div className=" justify-between md:justify-center md:w-fit w-full p-4 items-center vk md:gap-15 hidden md:flex">
        <ul className=' mt-10 flex flex-col items-end gap-5 font-medium '>
            <li className='text-xs flex gap-2 items-center  text-gray-600'><FaWhatsapp  className="text-green-500 text-xl"/> WHATSAAPP</li>
            <li className='text-xs flex gap-2 items-center text-gray-600'><FaEnvelope  className="text-blue-500 text-lg "/> MAIL</li>
            <li className='text-xs flex gap-2 items-center text-gray-600'><FaGithub className='text-white text-lg'/> GITHUB</li>
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
        </div>

<div className='w-80 h-80 rounded-full hidden bg-blue-500/40 blur-3xl   absolute -right-70  top-20'>

</div>


        </div>
    </article>
  )
}

export default Social