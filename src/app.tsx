import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './theme/theme';
import { Navbar } from './components/navbar/navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
