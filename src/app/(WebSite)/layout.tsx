import React from 'react';

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (<React.Fragment>
    {/* ------------------------------------------- */}
    {/* PageContent */}
    {/* ------------------------------------------- */}
    {children}
    {/* ------------------------------------------- */}
    {/* End Page */}
    {/* ------------------------------------------- */}
  </React.Fragment>);
}
