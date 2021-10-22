import '@/styles/tailwind.css';
import '@/styles/globals.scss';
import { MantineProvider } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import SeoHeader, { SeoHeaderProps } from '@/components/SeoHeader';
import NavigationLayout from '@/layouts/NavigationLayout';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  getSeo?: () => SeoHeaderProps;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const defaultLayout = (page: ReactElement) => {
  return <NavigationLayout>{page}</NavigationLayout>;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultLayout;
  const seoProps = Component.getSeo ? Component.getSeo() : {};

  return getLayout(
    <>
      <SeoHeader {...seoProps} />
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
