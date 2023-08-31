import {Box, Typography} from '@mui/material';
import {usePathname} from 'next/navigation';
import * as React from 'react';
import './SubMenu.css';

interface SubMenuProp {
  name: string;
  link: string;
  target: string;
  hoveredMenu: string | null;
  setHoveredMenu: (menu: string) => void;
}

export default function SubMenu({name, link, target, hoveredMenu, setHoveredMenu}: SubMenuProp) {
  const pathname = usePathname();
  const selectedMenu = pathname === link;
  const hovered = selectedMenu || hoveredMenu === name;

  return (<Box sx={{mt: '10px', mr: '50px'}} onMouseEnter={() => setHoveredMenu(name)} onMouseLeave={() => setHoveredMenu('')}>
    <a href={selectedMenu ? '#' : link} target={target} style={{color: 'white', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography sx={{fontSize: '1.1rem', textAlign: 'center'}}>
        {name}
      </Typography>
      <Box width="100px">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 20">
          <path className={hovered ? (selectedMenu ? 'selected-underline-path' : 'underline-path') : 'removed-underline-path'} fill="none" stroke="white" d="M97.7,4.1L0.6,3.3l29.1-0.5L11.4,8.9l75.1,0.9c0,0,1.7-0.2,2.6-1.5s0.4-2.2-0.9-2.3S86.1,6.2,85,7.9
	c-0.4,0.6-0.7,4.8-1.8,5.5s-2.7,0.3-3.3-0.5s-5.5-12.6-6-12.2C73.3,1.2,73,12,73,12s0,4.4-0.6,4.7c-0.6,0.3-1.8-4-1.8-4
	s-1.9-7.5-2.1-7.6c-0.2-0.1-0.6-0.3-1.1,0.8c-0.6,1.1-3.8,11.4-4.5,12s-1.5-0.9-1.8-1.7C60.6,15.4,57,2,56.6,2.2
	c-0.4,0.1-2.7,7.2-3.4,7.4c-0.7,0.2-2.6-2.7-2.9-2.8c-0.2,0-1.7,0.2-3,0.2c-1.1,0-2.2-0.3-2.2-0.3"></path>
        </svg>
      </Box>
    </a>
  </Box>);
}
