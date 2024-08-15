import { defineConfig } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  vitePlugins: [vue()],
  compilation: {
    output: {
      publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn.com' : './'
    }
  }
});
