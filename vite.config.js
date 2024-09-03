// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    // Disable SWC and use esbuild instead
    loader: 'jsx',
    jsxFactory: 'React.createElement',
    jsxInject: `import React from 'react'`,
  },
});
