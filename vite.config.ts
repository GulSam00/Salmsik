import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@/components', replacement: 'components' },
      { find: '@/api', replacement: 'api' },
      { find: '@/hooks', replacement: 'hooks' },
      { find: '@/lib', replacement: 'lib' },
      { find: '@/mocks', replacement: 'mocks' },
      { find: '@/pages', replacement: 'pages' },
      { find: '@/utils', replacement: 'utils' },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.salmsik.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
