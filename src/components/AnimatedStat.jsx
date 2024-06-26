import React, { useEffect, useRef } from 'react';

const AnimatedStat = ({ value, label }) => {
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // Duration in milliseconds
    const increment = end / (duration / 10); // Calculate increment for each 10ms

    const animate = () => {
      start += increment;
      if (start < end) {
        ref.current.innerText = Math.ceil(start);
        requestAnimationFrame(animate);
      } else {
        ref.current.innerText = end;
      }
    };

    animate();
  }, [value]);

  return (
    <div className="text-center">
      <div ref={ref} className="text-4xl font-bold mb-2">0</div>
      <div className="text-xl">{label}</div>
    </div>
  );
};

export default AnimatedStat;
