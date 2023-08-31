'use client';

import {Box, useMediaQuery, useTheme} from '@mui/material';
import * as React from 'react';
import {useState} from 'react';

import PageContainer from '@/app/(WebSite)/components/container/PageContainer';
import SplashImage from '@/app/(WebSite)/components/pages/main/SplashImage';
import Logo from '@/app/(WebSite)/components/layout/Logo';
import MainMenu from '@/app/(WebSite)/components/layout/MainMenu';
import {faDiscord, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {JpgStoreIcon} from '@/app/(WebSite)/components/icons/JpgStoreIcon';
import SocialLinkButton from '@/app/(WebSite)/components/buttons/SocialLinkButton';
import {menus} from '@/app/(WebSite)/components/layout/menus';
import useOnLoadImages from '@/app/(WebSite)/components/hooks/useOnLoadImages';

export default function Home() {
  const [currentSplashImage, setCurrentSplashImage] = useState('/images/DegenBunny-Droid.png');
  const [hoveredMenu, setHoveredMenu] = useState<string | null>('BUNNY LOUNGE');
  const allImages = ['/images/DegenBunnies-Logo.png', '/images/DegenBunny-Droid.png', '/images/Degen-Bunny-The-Dunk-Master.png', '/images/Degen-Bunnies-The-Angel.png'];
  const allImagesLoaded = useOnLoadImages(allImages);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (<PageContainer loaded={allImagesLoaded}
                         title="DegenBunnies - Cardano forever"
                         description="DegenBunnies is a passionate NFT brand on the Cardano Blockchain. Degen Bunnies combine humor, creativity and innovation to bring real utility to the Cardano ecosystem.">
    <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="column" sx={{padding: '10px', width: '100%', height: '100vh'}}>

      <Logo/>

      <Box position="relative" display="flex" justifyContent="center" sx={{width: '100%', height: mdUp ? '40vh' : '35vh', marginBottom: '10vh'}}>
        <SplashImage image="/images/DegenBunny-Droid.png" visible={currentSplashImage === '/images/DegenBunny-Droid.png'}/>
        <SplashImage image="/images/Degen-Bunny-The-Dunk-Master.png" visible={currentSplashImage === '/images/Degen-Bunny-The-Dunk-Master.png'}/>
        <SplashImage image="/images/Degen-Bunnies-The-Angel.png" visible={currentSplashImage === '/images/Degen-Bunnies-The-Angel.png'}/>
      </Box>

      {/*start menu layout*/}
      <Box display="flex" justifyContent="center" flexDirection={{xs: 'column', lg: 'row'}} alignItems="center">
        {menus.map((menu) => (<MainMenu
            key={menu.name}
            name={menu.name}
            link={menu.link}
            target={menu.target}
            splashImage={menu.splashImage!}
            setCurrentSplashImage={setCurrentSplashImage}
            hoveredMenu={hoveredMenu}
            setHoveredMenu={setHoveredMenu}
        />))}
      </Box>
      {/*end menu layout*/}

      <Box display="flex" justifyContent={'space-between'} sx={{width: '200px'}}>
        <SocialLinkButton icon={faXTwitter} link="https://twitter.com/DegenBunniesNFT"/>
        <SocialLinkButton icon={faDiscord} link="https://discord.com/invite/7jGcytKgpP"/>
        <SocialLinkButton icon={JpgStoreIcon} link="https://www.jpg.store/collection/degenbunnies"/>
      </Box>

    </Box>
  </PageContainer>);
}

