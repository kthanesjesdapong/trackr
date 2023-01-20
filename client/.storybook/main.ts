// .storybook/main.ts
import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';
import viteConfig from '../vite.config';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import type { ViteFinal } from '@storybook/builder-vite';


const config: StorybookViteConfig = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: "@storybook/react",
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    babelModeV7: true,
  },

  async viteFinal(config) {
    return mergeConfig(config, viteConfig);
  },
};

export default config;