import { FC } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'lib/styles/global.style';
import theme from 'lib/styles/theme';

const GlobalProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>União de Sonhos</title>
      </Head>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalProvider;
