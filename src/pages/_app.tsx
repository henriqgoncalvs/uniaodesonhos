import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';

import GlobalProvider from 'lib/contexts/GlobalProvider';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <div id="modal-root" />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
