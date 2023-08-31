'use client';

import {Helmet, HelmetProvider} from 'react-helmet-async';
import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';
import './Slide.css';
import TextualSpinner from '@/app/(WebSite)/components/loading/TextualSpinner';

type Props = {
  title?: string; description?: string; children: React.ReactNode; loaded: boolean;
};

const PageContainer = ({title, description, children, loaded}: Props) => (<HelmetProvider>
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description}/>
  </Helmet>
  {loaded ? (<AnimatePresence mode="wait">
    <motion.div>
      {children}
      <motion.div className="slide-out" initial={{scaleX: 1}} animate={{scaleX: 0}} exit={{scaleX: 0}} transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}/>
    </motion.div>
  </AnimatePresence>) : (<TextualSpinner/>)}
</HelmetProvider>);

export default PageContainer;
