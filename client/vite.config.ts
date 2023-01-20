import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';




// const aliasMap = {
//   '@': path.resolve(__dirname, './'),
//   '@src': path.resolve(__dirname, './src'),
//   '$types': path.resolve(__dirname, './types/'),
//   '@fonts': path.resolve(__dirname, './assets/fonts'),
//   '@svg': path.resolve(__dirname, './assets/svg'),
//   '@components': path.resolve(__dirname, './src/components'),
//   '@pages': path.resolve(__dirname, './src/pages'),
//   '@hooks': path.resolve(__dirname, './src/hooks'),
//   '@routes': path.resolve(__dirname, './src/routes'),
//   '@services': path.resolve(__dirname, './src/services'),
//   '@styles': path.resolve(__dirname, './src/styles'),
//   '@theme': path.resolve(__dirname, './src/theme'),
//   '@utils': path.resolve(__dirname, './src/utils')
// };


export const viteConfig = defineConfig({
  plugins: [react(), svgr({ svgrOptions: {} })],
  resolve: {
    alias: {
      //Anytime you add a new absolute path in tsconfig, you need to do the same in this file.
      '@': path.resolve(__dirname, './'),
      '@src': path.resolve(__dirname, './src'),
      '$types': path.resolve(__dirname, './types/'),
      // '@assets/*/*': path.resolve(__dirname, 'assets/*/*'),
      '@fonts': path.resolve(__dirname, './assets/fonts'),
      '@svg': path.resolve(__dirname, './assets/svg'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@services': path.resolve(__dirname, './src/services'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@utils': path.resolve(__dirname, './src/utils')
    },
  },
});

export default viteConfig;