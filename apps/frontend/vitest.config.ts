import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
    css: true,
  },
  resolve: {
    alias: {
      '@shared/types': path.resolve(__dirname, '../../packages/shared-types/src/index.ts'),
    },
  },
});
