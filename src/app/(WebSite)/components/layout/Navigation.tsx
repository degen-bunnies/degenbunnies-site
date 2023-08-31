import {subMenus} from '@/app/(WebSite)/components/layout/menus';
import {Box, Drawer, useMediaQuery, useTheme} from '@mui/material';
import Logo from '@/app/(WebSite)/components/layout/Logo';
import * as React from 'react';
import {useState} from 'react';
import SubMenu from '@/app/(WebSite)/components/layout/SubMenu';
import Hamburger from 'hamburger-react';

export default function Navigation() {
  const [iMenuSidebarOpen, setMenuSidebarOpen] = useState(false);

  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  console.log(mdUp);

  return (<Box display="flex" flexDirection="row" sx={{background: 'black', color: 'white', width: '100%', height: '100px', p: '20px'}}>
    <a href="/"><Logo sx={{width: '100px'}}/></a>
    <Box flexGrow={1}/>
    {mdUp ? (<>
      {subMenus.map((menu) => (<SubMenu
          key={menu.name}
          name={menu.name}
          link={menu.link}
          target={menu.target}
          hoveredMenu={hoveredMenu}
          setHoveredMenu={setHoveredMenu}
      />))}
    </>) : (<>
      <Hamburger toggled={iMenuSidebarOpen} toggle={setMenuSidebarOpen}/>
      <Drawer
          anchor="top"
          open={iMenuSidebarOpen}
          onClose={() => setMenuSidebarOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              top: '100px', background: 'black', boxSizing: 'border-box', maxWidth: 'calc(100% - 17px)'
            },
          }}
      >
        {subMenus.map((menu) => (<SubMenu
            key={menu.name}
            name={menu.name}
            link={menu.link}
            target={menu.target}
            hoveredMenu={hoveredMenu}
            setHoveredMenu={setHoveredMenu}
        />))}
      </Drawer>
    </>)}

  </Box>);
}
