import { useRef } from "react";

const MagneticButton = ({ children , className }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    btnRef.current.style.transform = "translate(0, 0)";
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnet-btn bg-transparent ${className}`}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
