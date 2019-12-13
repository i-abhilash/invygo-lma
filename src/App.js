import React from 'react';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import Appbar from './components/app-bar';
import AppRoutes from './app-routes';

function App() {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <Appbar />
        <AppRoutes />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
