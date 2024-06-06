import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Change the output directory to 'build'
  },
  base: '/Movie-recommendar/', // Ensure the base path is correctly set for GitHub Pages
});
