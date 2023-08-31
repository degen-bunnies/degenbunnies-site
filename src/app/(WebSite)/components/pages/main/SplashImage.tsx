'use client';

import * as React from 'react';
import {useRef} from 'react';
import Image from 'next/image';
import {animated} from 'react-spring';
import {use3dEffect} from 'use-3d-effect';
import {useMediaQuery, useTheme} from '@mui/material';

interface SplashImageProps {
  image: string;
  visible: boolean;
}

export default function SplashImage({image, visible}: SplashImageProps) {
  const ref = useRef(null);
  const {style, ...mouseHandlers} = use3dEffect(ref);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (<animated.div ref={ref} style={{position: 'absolute', ...style}} {...mouseHandlers}>
    <Image src={image} alt="DegenBunny" width={2000} height={2000} priority
           style={{
             width: 'auto',
             height: visible ? (mdUp ? '40vh' : '35vh') : '0px',
             maxHeight: '900px',
             opacity: visible ? 1 : 0,
             transform: visible ? 'translate3d(0,0,0) skewY(0)' : 'translate3d(0,30px,0) skewY(4deg)',
             transition: 'opacity .3s cubic-bezier(.22,.61,.36,1),transform .5s cubic-bezier(.18,.79,.48,.99)',
           }}/>
  </animated.div>);
}
