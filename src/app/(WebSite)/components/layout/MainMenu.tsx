import {Box, Typography} from '@mui/material';
import * as React from 'react';

interface MenuProps {
  name: string;
  link: string;
  target: string;
  splashImage: string;
  setCurrentSplashImage: (image: string) => void;
  hoveredMenu: string | null;
  setHoveredMenu: (menu: string) => void;
}

export default function MainMenu({
  name, link, target, splashImage, setCurrentSplashImage, hoveredMenu, setHoveredMenu,
}: MenuProps) {
  return <Box sx={{mr: {xs: '0px', lg: '2rem'}, cursor: 'pointer'}}
              onTouchStart={() => {
                setHoveredMenu(name);
                setCurrentSplashImage(splashImage);
              }}
              onMouseEnter={() => {
                setHoveredMenu(name);
                setCurrentSplashImage(splashImage);
              }}>
    <a href={link} target={target} style={{color: 'black', textDecoration: 'none'}}>
      <Typography sx={{fontSize: {xs: '1.5rem', lg: '2rem'}, fontWeight: '600'}} noWrap>
        {name}
      </Typography>
      {hoveredMenu === name ? (<Box>
        <style>
          {`
          .underline-path { stroke-dasharray: 200; stroke-dashoffset: 200; animation: drawLine 3s forwards; vertical-align:top; }
          @keyframes drawLine { to { stroke-dashoffset: 0; } }
          `}
        </style>
        <svg width="100" height="20" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 10"
             style={{verticalAlign: 'top', marginTop: '-0.5rem', border: '0', width: '6rem'}}>
          <path className="underline-path"
                d="M1.5,5.8c0-0.3-0.1-0.7-0.2-1.2C1,3.3,0.7,2.5,0.9,2.4c0.1,0,0.1,0,0.3,0.1c0.5,0.3,0.7,0.7,0.7,0.7
                  C2.8,4.7,3.6,6,4.1,5.9c0.1,0,0.2-0.1,0.3-0.2C4.7,5.4,4.7,5,4.6,4.6C4.6,3.7,4.5,2.9,4.7,2.3C4.8,2.1,4.8,2,4.9,2
                  c0.1,0,0.3,0.3,0.3,0.4c0.3,0.6,0.7,1,1,1.6c0.6,1.2,1.8,2.5,2.3,2.3c0.2-0.1,0.3-0.3,0.5-0.8c0.1-0.2,0.1-0.3,0.2-0.9
                  c0.1-0.6,0.1-0.7,0.2-1.1c0.2-0.8,0.2-0.7,0.3-1.2C10,1.4,9.9,1,10.1,1c0.2-0.1,0.5,0.4,0.7,0.8c0.9,1.4,1.9,2.7,2.7,4.1
                  c0.1,0.1,0.2,0.4,0.4,0.4c0.2,0,0.5-0.2,0.6-0.4c0.6-0.7,0.9-1.6,1-1.9c0.6-1.9,0.8-2.3,1-2.3c0.1,0,0.2,0.1,0.2,0.2
                  c0.7,1.4,2,5.1,2.8,5.1c0.2,0,0.5-0.2,0.6-0.3c0,0,0.2-0.2,0.4-0.5c0.5-0.9,0.5-2.8,0.8-2.9c0.1,0,0.1,0.1,0.2,0.1
                  c1,1.3,2.6,1.6,3.4,2.4c0,0,0.1,0.1,0.2,0.1c0.1,0,0.1-0.2,0.1-1c0-1-0.2-1.5,0-1.6c0.1,0,0.2,0,0.4,0.1c1.1,0.7,1.3,1.7,1.9,1.7
                  c0,0,0.2,0,0.4-0.1c0.6-0.5,0-2,0.2-2.1c0.1,0,0.2,0.1,0.3,0.2c0.3,0.4,0.7,0.7,1,1.1C29.8,5,30.6,6.1,30.9,6C31,6,31,5.8,31,5.4
                  c0.1-0.8,0.3-0.8,0.7-1.8c0-0.1,0.1-0.2,0.2-0.3c0.2-0.1,0.5,0.1,0.7,0.3c2,1.6,2.2,1.8,2.2,1.8c0.1,0.1,0.2,0.2,0.4,0.2
                  c0.1,0,0.2-0.2,0.2-0.4c0.1-0.5,0-0.9,0-1.1c0-0.2,0.1-0.7,0.3-1.6c0.1-0.4,0.1-0.7,0.2-0.7C36,1.9,36,2,36,2.1
                  c0.1,0.2,0.2,0.4,0.5,0.6c1,0.9,1.5,1.1,1.8,1.2c0.1,0,0.3,0.1,0.4,0c0.2-0.1,0.1-0.4,0.1-0.9c0-0.3,0.1-0.6,0.2-0.6
                  c0.2,0,0.4,0.2,0.5,0.4c1.4,1.8,1.6,1.8,1.7,1.7c0.2-0.1,0.3-0.5,0.3-0.6c0-0.2,0-0.3,0-0.7c0-0.4,0.1-0.5,0.1-0.5
                  c0.1-0.1,0.2,0,0.6,0.2c0.4,0.3,0.7,0.4,0.8,0.4c0.2,0,0.3,0,1-0.3c0.8-0.3,1-0.4,1.2-0.4c0.3,0,0.6,0,0.7,0.1"
                fill="none"
                stroke="black"/>
        </svg>
      </Box>) : (<Box>
        <svg width="100" height="20" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 10"
             style={{verticalAlign: 'top', marginTop: '-0.5rem', border: '0', width: '6rem'}}/>
      </Box>)}
    </a>
  </Box>;
}
