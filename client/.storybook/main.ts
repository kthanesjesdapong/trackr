// .storybook/main.ts
import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';
import viteConfig from '../vite.config';

const config: StorybookViteConfig = {
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.tsx', '@components'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: "@storybook/react",
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen', // 👈 react-docgen configured here.
  },
  features: {
    babelModeV7: true,
  },
  async viteFinal(config) {

    return mergeConfig(config, viteConfig);
  },
};

export default config;