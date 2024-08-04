import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    host: mode === 'development' ? true : false,
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  build: {
    sourcemap: 'hidden',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          mui: [
            '@emotion/react',
            '@emotion/styled',
            '@mui/icons-material',
            '@mui/material',
          ],
        },
      },
    },
  },
}));
