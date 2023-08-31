import {subMenus} from '@/app/(WebSite)/components/layout/menus';
import {Box, Drawer, IconButton, useMediaQuery, useTheme} from '@mui/material';
import Logo from '@/app/(WebSite)/components/layout/Logo';
import * as React from 'react';
import {useState} from 'react';
import SubMenu from '@/app/(WebSite)/components/layout/SubMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

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
      <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={() => setMenuSidebarOpen(true)}>
        <FontAwesomeIcon icon={faBars}/>
      </IconButton>
      <Drawer
          anchor="top"
          open={iMenuSidebarOpen}
          onClose={() => setMenuSidebarOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              background: 'black',
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
