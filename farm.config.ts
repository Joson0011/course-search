import { defineConfig } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  vitePlugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    })
  ],
  compilation: {
    output: {
      publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn.com' : './'
    }
  }
});
