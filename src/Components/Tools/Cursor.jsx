import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Component load hote hi puri body ka default arrow hide kar do
    document.body.style.cursor = "none";

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const follow = () => {
      if (!cursorRef.current) return; // Crash hone se bachane ke liye guard clause
      
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      cursorRef.current.style.transform =
        `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(follow);
    };

    // Animation loop start karein
    const animationFrameId = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animationFrameId); // Memory leak se bachne ke liye clean up
      document.body.style.cursor = "default"; // Component unmount hone par arrow wapas le aao
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      // 2. top-5 left-6 ko top-0 left-0 kiya taaki tracking exact perfectly center ho
      className="fixed w-4 h-4 bg-indigo-500 md:flex hidden top-0 left-0 z-9999 rounded-full pointer-events-none will-change-transform"
      style={{ boxShadow: "-1px -1px 2px gray, inset -1px -1px 1px gray" }}
    />
  );
};

export default Cursor;
