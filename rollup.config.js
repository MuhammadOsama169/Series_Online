import replace from '@rollup/plugin-replace';

export default {
  // ... other config options ...
  plugins: [
    // ... other plugins ...
    replace({
      preventAssignment: true,
      'import.meta.API_KEY': JSON.stringify(process.env.API_KEY),
    }),
  ],
};
