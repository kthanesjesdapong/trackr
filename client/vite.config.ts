import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      //Anytime you add a new absolute path in tsconfig, you need to do the same in this file.
      '@': path.resolve(__dirname, './'),
      '@components': path.resolve(__dirname, './src/components')
    },
  },

});
