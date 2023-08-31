import {Box, Typography} from '@mui/material';
import React from 'react';
import {Big_Shoulders_Inline_Display} from 'next/font/google';
import Image from 'next/image';
import {ReactCompareSlider} from 'react-compare-slider';

const bigShoulders = Big_Shoulders_Inline_Display({subsets: ['latin']});

interface ProfileProp {
  name: string;
  role: string;
  children: React.ReactNode;
}

export default function Profile({name, role, children}: ProfileProp) {
  return (<Box>
    <ReactCompareSlider
        position={90}
        onlyHandleDraggable={true}
        itemOne={<Image src={`/images/avatar/${name}-left.png`} alt={`${name} avatar`} width={500} height={500} style={{width: '100%', height: 'auto'}}/>}
        itemTwo={<Image src={`/images/avatar/${name}-right.png`} alt={`${name} avatar`} width={500} height={500} style={{width: '100%', height: 'auto'}}/>}/>
    <Typography className={bigShoulders.className} sx={{mt: '0.5rem', textAlign: 'center', textTransform: 'uppercase', fontWeight: '600', fontSize: '3rem'}}>
      {name}
    </Typography>
    <Typography sx={{textAlign: 'center', fontWeight: 600, fontSize: '1.5rem'}}>
      {role}
    </Typography>
    {children}
  </Box>);
}
