import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
// Professional modern icons import kiye
import { Code2, Sparkles, Terminal, Cpu } from 'lucide-react' 

const Lable = () => {
  const containerRef = useRef(null);
  const [hoverOffset, setHoverOffset] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll movement (0 se -1000px tak left jayega)
  const scrollX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const combinedX = useTransform(scrollX, (latestScroll) => latestScroll + hoverOffset);
  
  // Spring configuration ko aur smooth kiya (stiffness: 80, damping: 25)
  const smoothX = useSpring(combinedX, { stiffness: 80, damping: 25 });

  // Data Array: Isse code clean rehta hai aur icons manage karna aasan hota hai
  const marqueeItems = [
    { text: "Web Developer", icon: <Code2 className="w-16 h-16 md:w-20 md:h-20 text-black stroke-[1.5]" /> },
    { text: "UI/UX Designer", icon: <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-black stroke-[1.5]" /> },
    { text: "Frontend Engineer", icon: <Terminal className="w-16 h-16 md:w-20 md:h-20 text-black stroke-[1.5]" /> },
    { text: "Full Stack", icon: <Cpu className="w-16 h-16 md:w-20 md:h-20 text-black stroke-[1.5]" /> },
  ];

  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div 
      ref={containerRef} 
      onMouseEnter={() => setHoverOffset(-200)} 
      onMouseLeave={() => setHoverOffset(0)}
      className='w-full border-y-2 border-black py-6 bg-[#7AF298] overflow-x-hidden cursor-pointer select-none relative flex items-center shadow-[0_4px_20px_rgba(122,242,152,0.2)]'
    >
        <motion.div
          style={{ x: smoothX }}
          className='flex items-center gap-16 whitespace-nowrap will-change-transform'
        > 
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <h1 className='text-7xl md:text-8xl lg:text-9xl text-black font-extrabold tracking-tighter uppercase'>
                {item.text}
              </h1>
              <div className="flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                {item.icon}
              </div>
            </div>
          ))}
        </motion.div>
    </div>
  )
}

export default Lable
