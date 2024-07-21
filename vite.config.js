import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup.js', // Asegúrate de que esta ruta sea correcta
    exclude: [...configDefaults.exclude, 'e2e/*'],
  },
});