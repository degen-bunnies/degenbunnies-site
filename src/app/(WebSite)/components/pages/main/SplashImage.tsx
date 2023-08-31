'use client';

import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {animated} from 'react-spring';
import {use3dEffect} from 'use-3d-effect';
import {Box} from '@mui/material';

interface SplashImageProps {
  image: string;
}

export default function SplashImage({image}: SplashImageProps) {
  const ref = useRef(null);
  const {style, ...mouseHandlers} = use3dEffect(ref);
  const [imageSize, setImageSize] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setImageSize(Math.min(window.innerWidth, window.innerHeight, 900));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(imageSize);
  return (<Box sx={{width: `${imageSize}px`, m: `${imageSize / 5}px`}}>
    <animated.div ref={ref} style={{...style}} {...mouseHandlers}>
      <Image src={image} alt="DegenBunny" width={2000} height={2000} style={{width: '100%', height: 'auto'}}/>
    </animated.div>
  </Box>);
}
