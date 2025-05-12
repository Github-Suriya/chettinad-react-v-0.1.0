import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ end, duration = 3000 }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      let endNum = parseFloat(end);
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressRatio = Math.min(progress / duration, 1);
        const current = endNum * progressRatio;
        setCount(endNum % 1 !== 0 ? current.toFixed(1) : Math.floor(current));

        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span className="count-text" ref={ref}>
      {count}
    </span>
  );
};

export default Counter;