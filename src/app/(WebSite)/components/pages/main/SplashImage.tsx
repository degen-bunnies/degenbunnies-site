'use client';

import * as React from 'react';
import {useRef} from 'react';
import Image from 'next/image';
import {animated} from 'react-spring';
import {use3dEffect} from 'use-3d-effect';
import {useMediaQuery, useTheme} from '@mui/material';

interface SplashImageProps {
  image: string;
}

export default function SplashImage({image}: SplashImageProps) {
  const ref = useRef(null);
  const {style, ...mouseHandlers} = use3dEffect(ref);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (<animated.div ref={ref} style={{...style}} {...mouseHandlers}>
    <Image src={image} alt="DegenBunny" width={2000} height={2000}
           style={{width: 'auto', height: mdUp? '40vh':'35vh', maxHeight: '900px', marginBottom: '10vh'}}/>
  </animated.div>);
}
