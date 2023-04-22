// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
};
