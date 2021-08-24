import { Footer, Header } from 'components/organisms';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';
import '../public/assets/fonts/index.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>O2</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RecoilRoot>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
