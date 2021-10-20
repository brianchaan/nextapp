import '@/styles/globals.scss';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import SeoHeader, { SeoHeaderProps } from '@/components/SeoHeader';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  getSeo?: () => SeoHeaderProps;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const seoProps = Component.getSeo ? Component.getSeo() : {};

  return getLayout(
    <>
      <SeoHeader {...seoProps} />
      <Component {...pageProps} />
    </>
  );
}
