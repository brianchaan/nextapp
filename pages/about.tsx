import React, { ReactElement } from 'react';
import NavigationLayout from '@/layouts/NavigationLayout';
import { SeoHeaderProps } from '@/components/SeoHeader';
import ContainerLayout from '@/layouts/ContainerLayout';
import { Slider } from '@mantine/core';
import { Gi3DStairs } from 'react-icons/gi';
import { IconContext } from 'react-icons';

export default function About() {
  return (
    <ContainerLayout>
      <div className="page">
        <div
          className="flex items-center justify-center p-4 rounded bg-gray-100 text-center"
          style={{ height: '200px', width: '100%' }}
        >
          <IconContext.Provider value={{ color: '#913cc6', size: '100px' }}>
            <Gi3DStairs />
          </IconContext.Provider>
        </div>
      </div>
      <Slider
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
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
