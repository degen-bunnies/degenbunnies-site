import Image from 'next/image';
import {Box, Theme} from '@mui/material';
import * as React from 'react';
import {SxProps} from '@mui/system/styleFunctionSx';

interface LogoProp {
  sx?: SxProps<Theme>;
}

export default function Logo({sx = {width: {xs: '30vw', lg: '15vw', maxWidth: '300px'}}}: LogoProp) {
  return (<Box sx={sx}>
    <Image src="/images/DegenBunnies-Logo.png" alt={'Degen Bunnies Logo'} width={1581} height={896} priority style={{width: '100%', height: 'auto', maxWidth: '300px'}}/>
  </Box>);
}
