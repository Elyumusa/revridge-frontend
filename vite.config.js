import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
  plugins: [react()],
  define:{
    'import.meta.env.VITE_REVRIDGE_BACKEND_URL': JSON.stringify(env.VITE_REVRIDGE_BACKEND_URL)
  },
  //publicDir: 'src/assets',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    assetsInclude: ['src/assets/**/*'],
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        //assets: resolve(__dirname, 'src/assets'),
      },
    },
  },
}})
