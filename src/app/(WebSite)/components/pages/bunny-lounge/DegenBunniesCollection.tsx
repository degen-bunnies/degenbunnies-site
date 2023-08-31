import {Box, Typography} from '@mui/material';
import {Big_Shoulders_Inline_Display} from 'next/font/google';
import React from 'react';
import Image from 'next/image';

const bigShoulders = Big_Shoulders_Inline_Display({
  subsets: ['latin'],
});

interface DegenBunniesCollectionProps {
  imageUrl: string;
  name: string;
  status: string;
  children: React.ReactNode;
  link: string;
}

export default function DegenBunniesCollection({imageUrl, name, status, children, link}: DegenBunniesCollectionProps) {
  return <Box sx={{p: '10px', width: {xs: '100%', md: '400px', lg: '500x'}}} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
    <Image src={imageUrl} alt={name} width="500" height="500" style={{width: '100%', height: 'auto', maxWidth: '500px'}}/>
    <Box flexGrow={1} sx={{textAlign: 'center'}}>
      <Typography mb="1rem" sx={{textTransform: 'uppercase', fontWeight: 600, fontSize: '1.4rem', m: '10px'}} noWrap>
        {name}
      </Typography>
      <Typography mb="0.5rem">
        {status}
      </Typography>
      <Typography mb="2rem" style={{textAlign: 'center'}}>
        {children}
      </Typography>
    </Box>
    <a href={link} target="_blank" style={{color: 'black'}}>
      <Image src="/images/jpg-logo.svg" alt="jpg store" width="48" height="52"/>
    </a>
  </Box>;
}
