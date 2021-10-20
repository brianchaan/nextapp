import React, { ReactElement } from 'react';
import NavigationLayout from '@/layouts/NavigationLayout';
import { SeoHeaderProps } from '@/components/SeoHeader';
import ContainerLayout from '@/layouts/ContainerLayout';

export default function About() {
  return (
    <ContainerLayout>
      <div className="page">
        <div
          className="flex align-center justify-center p-4 rounded bg-gray-100 text-center"
          style={{ height: '200px', width: '100%' }}
        >
          About Page
        </div>
      </div>
    </ContainerLayout>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>;
};

About.getSeo = function getSeo() {
  const props: SeoHeaderProps = {};
  props.title = 'Test Title';
  props.description = 'Test Description';
  return props;
};
