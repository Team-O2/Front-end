import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyles from './assets/styles/GlobalStyles';
import theme from 'assets/styles/theme';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
