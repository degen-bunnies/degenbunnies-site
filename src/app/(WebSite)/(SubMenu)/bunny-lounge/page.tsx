'use client';

import * as React from 'react';
import PageContainer from '@/app/(WebSite)/components/container/PageContainer';
import {Box, Container, Typography} from '@mui/material';
import Image from 'next/image';
import {Big_Shoulders_Inline_Display} from 'next/font/google';
import DegenBunniesTitle from '@/app/(WebSite)/components/pages/bunny-lounge/DegenBunniesTitle';
import SocialLinkButton from '@/app/(WebSite)/components/buttons/SocialLinkButton';
import {faDiscord, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import DegenBunniesCollection from '@/app/(WebSite)/components/pages/bunny-lounge/DegenBunniesCollection';
import DegenBinnesCounter from '@/app/(WebSite)/components/pages/bunny-lounge/DegenBinnesCounter';
import useOnLoadImages from '@/app/(WebSite)/components/hooks/useOnLoadImages';

const bigShoulders = Big_Shoulders_Inline_Display({subsets: ['latin']});

export default function BunnyLounge() {

  const allImages = ['/images/Degen-Bunny-Lounge.jpg', '/images/Tattoos.png', '/images/Degen-Bunny-Gold.png', '/images/Ancient-bunnies.png', '/images/Cardano-Logo-white.png'];
  const allImagesLoaded = useOnLoadImages(allImages);

  return (<PageContainer loaded={allImagesLoaded}
                         title="Bunny Lounge - DegenBunnies"
                         description="DegenBunnies is a passionate NFT brand on the Cardano Blockchain. Degen Bunnies combine humor, creativity and innovation to bring real utility to the Cardano ecosystem.">
    <Box display="flex" flexDirection="column">
      <Box sx={{width: '100%'}}>
        <Image src="/images/Degen-Bunny-Lounge.jpg" alt="Degen Bunny Lounge" width="2560" height="1440" priority style={{width: '100%', height: 'auto'}}/>
      </Box>


      <Container sx={{mt: '30px'}}>
        <Typography
            className={bigShoulders.className}
            sx={{
              fontSize: {xs: '4rem', md: '7rem'}, lineHeight: {xs: '4rem', md: '6.5rem'}, fontWeight: '900', textShadow: '0px 0px 10px rgba(0,0,0,0.3)', textAlign: 'center',
            }}
            noWrap
        >
          WELCOME TO THE <br/> BUNNY LOUNGE
        </Typography>

        <Typography sx={{mt: '30px'}}>
          DegenBunnies is a passionate NFT brand on the <strong>Cardano</strong> Blockchain. Degen Bunnies combine humor, creativity and innovation to bring real utility to the
          Cardano ecosystem. Are your ready to join the bunny revolution?
        </Typography>

        <Box display="flex" flexDirection={{xs: 'column', md: 'row'}} mt="30px">

          <DegenBunniesTitle title="DEGEN">
            <Typography sx={{textAlign: 'center', mt: '2rem'}}>
              Degen is short for “degenerate”, usually refers to people who often make risky bets without doing proper due dilligence.
            </Typography>
            <Typography sx={{textAlign: 'center', mt: '1rem'}}>
              Make us proud and show us that you are one of the best degens Cardano has ever seen.
              Get as many bunnies as you can, never sell, go to the moon & then party with others at the Bunny Lounge. That’s how it’s done.
            </Typography>
          </DegenBunniesTitle>

          <Box width={{xs: '0px', md: '80px'}} height={{xs: '30px', md: '0px'}}/>

          <DegenBunniesTitle title="BUNNIES">
            <Typography sx={{textAlign: 'center', mt: '2rem'}}>
              We have seen apes, cats, rats, ducks, birds and even more apes.
            </Typography>
            <Typography sx={{textAlign: 'center', mt: '1rem'}}>
              Now it’s <strong>bunny time</strong>. Don’t you feel the same? Our bunnies are cool, clever and just love to chill with other Degens at the famous Bunny Lounge.
            </Typography>
            <Typography sx={{textAlign: 'center', mt: '1rem'}}>
              It’s a culture shift. A new era.<br/>
              <strong>We don’t ape in. We bunny in.</strong>
            </Typography>
          </DegenBunniesTitle>

        </Box>
      </Container>


      <Box mt="30px">
        <Image src="/images/Tattoos.png" alt="tattoos" width="3324" height="780" priority style={{width: '100%', height: 'auto'}}/>
      </Box>

      <Container>
        <Box mt="30px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography className={bigShoulders.className} sx={{fontSize: {xs: '2rem', md: '4rem'}, fontWeight: '900', textShadow: '0px 0px 10px rgba(0,0,0,0.3)'}}>
            OUR COLLECTIONS
          </Typography>

          <Box display="flex" flexDirection={{xs: 'column', md: 'row'}} mt="30px">
            <DegenBunniesCollection imageUrl="/images/Degen-Bunny-Gold.png" name="Degen Bunnies OG collection" status="Sold out."
                                    link="https://www.jpg.store/collection/degenbunnies">
              The OG collection of 6’666 NFTs was launched in September 2022.
            </DegenBunniesCollection>
            <Box width={{xs: '0px', md: '80px'}} height={{xs: '30px', md: '0px'}}/>
            <DegenBunniesCollection imageUrl="/images/Ancient-bunnies.png" name="Degen Bunnies ancient collection" status="Sold out."
                                    link="https://www.jpg.store/collection/degenbunnies">
              The Ancient collection consists of 555 NFTs and was launched in January 2023. Selected holders burned OG bunnies to receive Ancient bunnies in return.
            </DegenBunniesCollection>
          </Box>
        </Box>
      </Container>

      <Box sx={{background: 'black', mt: '15px'}}>
        <Container>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white'}}>
            <DegenBinnesCounter/>
            <Image src="/images/Cardano-Logo-white.png" alt="Cardano Logo" width="597" height="553" priority style={{width: '110px', height: 'auto', margin: '20px'}}/>
            <SocialLinkButton icon={faXTwitter} link="https://twitter.com/DegenBunniesNFT" height={48} color="white"/>
            <SocialLinkButton icon={faDiscord} link="https://discord.com/invite/7jGcytKgpP" height={48} color="white"/>
          </Box>
        </Container>
      </Box>

      <Container>
        <Box mt="50px" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Typography className={bigShoulders.className} sx={{fontSize: {xs: '2rem', md: '4rem'}, fontWeight: '900', textShadow: '0px 0px 10px rgba(0,0,0,0.3)'}}>
            DEGEN BUNNIES MANIFESTO
          </Typography>

          <Typography sx={{m: '50px', textAlign: 'center', fontSize: '1.2rem', lineHeight: '1.9rem', wordSpacing: '0.05rem', letterSpacing: '0.05rem'}}>
            We’ve stayed down the bunny hole<br/>
            For quite a long time<br/>
            Now it’s time to take our role,<br/>
            And let bunnies climb!<br/>
            <br/>
            Humor and Innovation<br/>
            Combine as we hop<br/>
            With a challenge for patience<br/>
            Before our big drop<br/>
            <br/>
            We all know that Cardano<br/>
            Is tired of new apes<br/>
            Time “to bunny in” and flow<br/>
            Like heroes and capes!<br/>
            <br/>
            Whether hop-offs, Easter eggs<br/>
            Or chocolate bunnies<br/>
            Courage clutches our long legs,<br/>
            To keep you happy<br/>
            <br/>
            In the Bunny Lounge, chilling<br/>
            With our bunny friends<br/>
            Every Degen is willing<br/>
            To thrive with no ends<br/>
            <br/>
            From the Bunny Gallery<br/>
            Showcasing your art<br/>
            To each carrot’s calories<br/>
            We do it with heart!<br/>
            <br/>
            Our community’s passion<br/>
            Is growing with you<br/>
            So Degen in your fashion<br/>
            And do what you do!<br/>
          </Typography>
        </Box>
      </Container>
    </Box>
  </PageContainer>);
}
