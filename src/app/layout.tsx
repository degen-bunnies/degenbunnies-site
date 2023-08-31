import React from 'react';
import 'react-quill/dist/quill.snow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {App} from './App';
import './global.css';

export const metadata = {
  title: 'DegenBunnies - Cardano forever',
  description: 'DegenBunnies is a passionate NFT brand on the Cardano Blockchain. Degen Bunnies combine humor, creativity and innovation to bring real utility to the Cardano ecosystem.',
};

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (<html lang="en" suppressHydrationWarning>
  <body>
  <App>
    {children}
  </App>
  </body>
  </html>);
}
