import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export const App = ({children}: { children: React.ReactNode }) => {
  return (<>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline/>
    {children}
  </>);
};
