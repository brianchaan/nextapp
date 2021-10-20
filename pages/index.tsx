import React, { ReactElement } from 'react';
import NavigationLayout from '@/layouts/NavigationLayout';

export default function Home() {
  return (
    <>
      <strong>Home page</strong>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>;
};
