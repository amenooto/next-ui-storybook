import * as React from 'react';
import '../app/global.css';
import { Decorator } from '@storybook/react';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const previewDecorators: Decorator = (Story, context) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Story />
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default [previewDecorators];
