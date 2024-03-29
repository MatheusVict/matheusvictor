import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'next-i18next';
import NextNProgress from 'nextjs-progressbar';

import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <Analytics />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
