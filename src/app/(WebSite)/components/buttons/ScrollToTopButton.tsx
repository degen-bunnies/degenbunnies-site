'use client';

import React, {useEffect, useRef, useState} from 'react';
import {Box} from '@mui/material';
import './ScrollToTopButton.css';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const polygonRef = useRef<SVGPolygonElement | null>(null);

  useEffect(() => {
    const polygon = polygonRef.current!;
    const length = polygon.getTotalLength();
    polygon.style.strokeDasharray = `${length} ${length}`;
    polygon.style.strokeDashoffset = `${length}`;

    const handleScroll = () => {
      if (window.scrollY >= 130) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const polygon = polygonRef.current!;
    const length = polygon.getTotalLength();

    if (isHovered) {
      polygon.style.transition = 'stroke-dashoffset 1.9s ease-in-out';
      polygon.style.strokeDashoffset = '0';
    } else {
      polygon.style.transition = 'stroke-dashoffset 1.9s ease-in-out';
      polygon.style.strokeDashoffset = `${length}`;
    }
  }, [isHovered]);

  const handleClick = () => {
    window.scrollTo({
      top: 0, behavior: 'smooth',
    });
  };

  return (<Box id="back-to-top" className={`predefined ${isVisible ? 'on' : 'off'}`}
               onClick={handleClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    <span className="back-to-top-text">Top</span>
    <span className="back-to-top-icon">
        <svg className="svg--back-to-top" xmlns="http://www.w3.org/2000/svg" width="80.6px" height="83.7px" viewBox="0 0 80.6 83.7">
          <polygon ref={polygonRef} className="button-outline"
                   points="3.6,81.7 12.3,4.6 24.5,13.8 31.4,4.6 40.9,15.4 47,5 54.3,15.6 62.8,7.8 66.7,16.3 73.1,10.3 76.9,15.8 78.8,79.9"/>
        </svg>
      </span>
  </Box>);
}
