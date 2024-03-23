import React, { useEffect, useRef, useState } from 'react';
import './ScrollAnimation.css'; // Import CSS file for animations

const ScrollAnimationWrapper = ({ children }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0 });

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-with-content ${isVisible ? 'show' : ''}`}
    >
      {children}
    </section>
  );
};

export default ScrollAnimationWrapper;