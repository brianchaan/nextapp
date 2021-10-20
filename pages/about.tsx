import React, { ReactElement } from 'react';
import NavigationLayout from '@/layouts/NavigationLayout';
import { SeoHeaderProps } from '@/components/SeoHeader';

export default function About() {
  return (
    <>
      <div className="p-10">About page</div>
    </>
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
