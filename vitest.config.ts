import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  test: {
    // React components need a browser-like environment.
    environment: 'jsdom',

    // Load test setup before every test file.
    setupFiles: ['./tests/setup.ts'],

    // Enable describe(), it(), expect(), etc. globally.
    globals: true,

    // Test files.
    include: ['tests/**/*.{test,spec}.{ts,tsx}'],

    // Coverage configuration.
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: ['node_modules/', 'dist/', 'tests/', '**/*.d.ts', '**/main.tsx'],
    },
  },
});
