import React from 'react'

const Social = () => {
  return (
    <article className="relative flex flex-col px-4 items-center md:items-start w-full md:w-fit">


      <hr className=' bg-gray-500 w-full md:hidden'/>

      <div className='flex md:hidden py-5 text-xs justify-between font-thin w-full p-2'>
        <button>+91 8198947026</button>
        <button>Vikasnaira1322@gmail.com</button>
      </div>


        <h1 className='text-3xl text-[#7AF298] font-bold w-fit hidden md:block' >Social Links</h1>
      <hr className=' bg-gray-500 w-full hidden md:block mt-7'/>
        
        <div className=" justify-between md:justify-center md:w-fit w-full p-4 items-center md:items-start md:gap-15 hidden md:flex">
        <ul className=' mt-10 flex flex-col gap-5 font-medium '>
            <li className='text-xs text-gray-600'>INSTAGRAM</li>
            <li className='text-xs text-gray-600'>TWITTER</li>
            <li className='text-xs text-gray-600'>LINKEDIN</li>
            <li className='text-xs text-gray-600'>GITHUB</li>
        </ul>


     <ul className=' mt-10 flex flex-col gap-5 font-medium'>
            <li className='text-xs text-gray-600 '>Vikasnaira1322@gmail.com</li>
            <li className='text-xs text-gray-600'>TWITTER</li>
            <li className='text-xs text-gray-600'>LINKEDIN</li>
            <li className='text-xs text-gray-600'>GITHUB</li>
        </ul>

<div className='w-80 h-80 rounded-full hidden bg-blue-500/40 blur-3xl   absolute -right-70  top-20'>

</div>


        </div>
    </article>
  )
}

export default Social