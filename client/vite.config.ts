import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';




export const viteConfig = defineConfig({
  plugins: [
    //react({}) // This plugin causes error with storybook
    svgr({ svgrOptions: {} })],

  // react({exclude: /\.stories\.(t|j)sx?$/,include: '**/*.tsx',babel: { babelrc: true}}), 
  resolve: {
    alias: {
      //Anytime you add a new absolute path in tsconfig, you need to do the same in this file.
      '@': path.resolve(__dirname, './'),
      '@src': path.resolve(__dirname, './src'),
      '$types': path.resolve(__dirname, './types/'),
      '@fonts': path.resolve(__dirname, './assets/fonts'),
      '@svg': path.resolve(__dirname, './assets/svg'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@services': path.resolve(__dirname, './src/services'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@utils': path.resolve(__dirname, './src/utils')
    },
  },
  optimizeDeps: {
    include: ['esm-dep > cjs-dep', 'storybook-dark-mode'],
  },
});

export default viteConfig;