'use client';

import PageContainer from '@/app/(WebSite)/components/container/PageContainer';
import useOnLoadImages from '@/app/(WebSite)/components/hooks/useOnLoadImages';
import {Box, Container, Grid, Typography} from '@mui/material';
import * as React from 'react';
import {Big_Shoulders_Inline_Display} from 'next/font/google';
import Profile from '@/app/(WebSite)/components/pages/about-us/Profile';
import SocialLinkButton from '@/app/(WebSite)/components/buttons/SocialLinkButton';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';

const bigShoulders = Big_Shoulders_Inline_Display({subsets: ['latin']});

export default function BunnyLounge() {

  const allImages: string[] = [];
  ['bob', 'jenny', 'kira', 'will'].forEach((name) => {
    allImages.push(`/images/avatar/${name}-left.png`, `/images/avatar/${name}-right.png`);
  });
  const allImagesLoaded = useOnLoadImages(allImages);

  return (<PageContainer loaded={allImagesLoaded}
                         title="DegenBunnies - Cardano forever"
                         description="DegenBunnies is a passionate NFT brand on the Cardano Blockchain. Degen Bunnies combine humor, creativity and innovation to bring real utility to the Cardano ecosystem.">
    <Container sx={{mt: '80px'}}>
      <Typography className={bigShoulders.className} sx={{fontSize: {xs: '2rem', lg: '4rem'}, fontWeight: '900', textShadow: '0px 0px 10px rgba(0,0,0,0.3)', textAlign: 'center'}}>
        WHO ARE THE PEOPLE BEHIND DEGENBUNNIES?
      </Typography>
      <Typography sx={{mt: '30px', textAlign: 'center'}}>
        We are a team consisting of six friends, who love people and NFTs. The largest part of our team is based in Europe.
      </Typography>
      <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
        Our background is in graphic design, strategy consulting, software engineering, research and marketing. We are <strong>part of the CNFT history</strong> and early members
        of the SpaceBudz,
        ChilledKongs and BossCatRocket Club community – and of many more.
      </Typography>
      <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
        <strong>Now, it is our time to help write and shape the CNFT & Web3 success story.</strong> Not with a meaningless roadmap.<br/>
        But based on discussions within the community,<br/>
        by identifying or creating new NFT trends and integrating them into our DegenBunnies project.
      </Typography>
      <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
        <strong>We are community-centric and want to be innovators in the market.</strong> We do not make empty promises. We know what we are talking about and what we can do. We
        do not do everything. But what we do, we do right and well. Remarkably well.<br/>
        We love ideas that inspire and maintain an excellent <strong>creative culture</strong>. We want to touch people emotionally and inspire them.<br/>
        This through the power of creativity and the possibilities of technology.
      </Typography>
      <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
        We are cheeky. We are innovative. We are courageous. We have fun. And we love carrots. <strong>We are DegenBunnies.</strong>
      </Typography>
      <Typography sx={{m: '1rem', textAlign: 'center', fontWeight: '600', fontSize: '2rem'}}>
        ARE YOU READY FOR US?
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Profile name="kira" role="Lead Artist">
            <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
              Kira is our wonderful lead artist.
            </Typography>
            <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
              After completing her Bachelor of Fine Arts, she worked as a graphic designer at a large corporation. Our incredibly talented Kira loves to travel and to take
              landscape
              photography
            </Typography>
          </Profile>
        </Grid>
        <Grid item md={4} xs={12}>
          <Profile name="will" role="Marketing">
            <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
              Will loves to communicate with you on Twitter and Discord. He is at his happiest and most in tune, when he can think about funny and creative posts.
              He works as a consultant.
            </Typography>
            <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
              Will loves all kind of sports and is a heavy gym bunny.
            </Typography>
          </Profile>
        </Grid>
        <Grid item md={4} xs={12}>
          <Profile name="bob" role="Research">
            <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
              Bob has a Master’s Degree in Business Information Technology.
            </Typography>
            <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
              He’s a researcher and Blockchain consultant and provides us with his newest NFT & Cardano research insights. He loves surfing in summer and skiing in winter.
            </Typography>
          </Profile>
        </Grid>
        <Grid item md={4} xs={12}>
          <Profile name="jenny" role="Mod">
            <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
              Jenny is our mod from Nigeria. Jenny is a digital information technology analyst, is in the CNFT space since February 2022 and has grown to love the space. Jenny has
              3 wonderful kids.
            </Typography>
          </Profile>
        </Grid>
      </Grid>
      <Typography
          className={bigShoulders.className}
          sx={{mt: 10, fontSize: {xs: '2rem', lg: '4rem'}, fontWeight: '900', textShadow: '0px 0px 10px rgba(0,0,0,0.3)', textAlign: 'center'}}>
        SEND US YOUR APPLICATION
      </Typography>
      <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
        Do you want to become part of the bunny revolution? Help shape the CNFT future with us.
      </Typography>
      <Typography sx={{mt: '0.5rem', textAlign: 'center'}}>
        Tell us more about you in Discord. Why are you motivated to join us and how do you add value to our team?
      </Typography>

      <Box display="flex" justifyContent={'center'} m={5}>
        <SocialLinkButton icon={faDiscord} link="https://discord.com/invite/7jGcytKgpP"/>
      </Box>
    </Container>
  </PageContainer>);
}
