import React, { ReactElement } from 'react';
import NavigationLayout from '@/layouts/NavigationLayout';

export default function Home() {
  return (
    <>
      <div>Home page</div>
      <div
        style={{
          width: '50px',
          backgroundColor: 'blue',
        }}
      >
        <a>Testlinktestlink</a>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>;
};
