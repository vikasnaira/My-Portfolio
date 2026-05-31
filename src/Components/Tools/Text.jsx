import React, { useEffect, useState } from "react";

const Text = ({ bg , delay=0 ,Name ,top, move}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true),delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`wrap relative ${top}`}>
      <div
          className={`
          text  
          absolute
          linear
          transition-transform duration-1000 ease-in-out
          ${show ? `${move}` : "translate-y-0"}
          ${bg}
          `}  
      >
       {Name}
    </div>
    <div className="h-10 md:h-20 w-full bg-black   z-2 absolute">
    </div>
          </div>  
  );
};

export default Text;
