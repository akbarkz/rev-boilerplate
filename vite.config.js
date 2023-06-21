import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

export default defineConfig({
  build: {
    sourcemap: true,
  },
  esbuild: {
    jsxInject: `import { jsx as _jsx } from 'react/jsx-runtime'`,
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/react/jsx-dev-runtime'],
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@config': path.resolve(__dirname, './src/config'),
      '@custom-types': path.resolve(__dirname, './src/types'),
      '@services': path.resolve(__dirname, './src/services'),
    },
  },
});
