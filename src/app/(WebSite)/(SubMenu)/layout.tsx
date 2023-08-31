'use client';

import React from 'react';
import ScrollToTopButton from '@/app/(WebSite)/components/buttons/ScrollToTopButton';
import Navigation from '@/app/(WebSite)/components/layout/Navigation';

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (<React.Fragment>
    <Navigation/>
    {/* ------------------------------------------- */}
    {/* PageContent */}
    {/* ------------------------------------------- */}
    {children}
    {/* ------------------------------------------- */}
    {/* End Page */}
    {/* ------------------------------------------- */}
    <ScrollToTopButton/>
  </React.Fragment>);
}
