import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  define: (() => {
    const env = {};
    Object.keys(process.env).forEach((key) => {
      if (key.startsWith(`VITE_`)) {
        env[`import.meta.env.${key}`] = process.env[key];
      }
    });
    return env;
  })(),
});
