import {Box, Typography} from '@mui/material';
import {Big_Shoulders_Inline_Display} from 'next/font/google';
import React from 'react';

const bigShoulders = Big_Shoulders_Inline_Display({
  subsets: ['latin'],
});

interface DegenBunniesTitleProps {
  title: string;
  children: React.ReactNode;
}

export default function DegenBunniesTitle({title, children}: DegenBunniesTitleProps) {
  return <Box sx={{
    borderColor: 'black',
    borderRadius: '25px',
    borderStyle: 'solid',
    borderWidth: '3px',
    p: '10px',
    width: {xs: '100%', md: '500px'},
    transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
    '&:hover': {
      borderStyle: 'groove', borderWidth: '3px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
    },
  }}>
    <Typography className={bigShoulders.className} sx={{
      fontSize: '3.5rem', fontWeight: '600', lineHeight: '1', textAlign: 'center', mb: '1rem',
    }}>
      {title}
    </Typography>
    {children}
  </Box>;
}
