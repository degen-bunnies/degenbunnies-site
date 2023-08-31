'use client';

import React, {useEffect, useRef, useState} from 'react';
import {Box, Typography} from '@mui/material';
import {IBM_Plex_Serif} from 'next/font/google';

const ibmPlexSerif = IBM_Plex_Serif({weight: '400', subsets: ['latin']});

export default function Counter() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const animateNumber = () => {
    if (hasAnimated) return; // Return if the animation is already complete.

    const endValue = 6666;

    let currentVal = 0;

    const interval = setInterval(() => {
      currentVal += 11;
      setCount(currentVal);

      if (currentVal >= endValue) {
        clearInterval(interval);
        setHasAnimated(true); // Complete the animation
      }
    }, 1);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animateNumber();
      }
    }, {
      threshold: 0.1, // 10% of the element is visible
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, hasAnimated]);

  return (<Box ref={ref} sx={{width: '100px'}}>
        <Typography className={ibmPlexSerif.className} sx={{textAlign: 'center', fontSize: '2.2rem'}}>
          {count}<br/>
        </Typography>
        <Typography sx={{fontWeight: '600', textAlign: 'center'}}>
          BUNNIES
        </Typography>
      </Box>);
}
