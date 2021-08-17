import { Footer } from 'components/organisms';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';
import '../public/assets/fonts/index.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RecoilRoot>
        <Component {...pageProps} />
        <Footer />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
