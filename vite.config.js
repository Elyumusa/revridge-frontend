import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
  plugins: [react(),],
  define:{
    'import.meta.env.VITE_REVRIDGE_BACKEND_URL': JSON.stringify(env.VITE_REVRIDGE_BACKEND_URL)
  },
  //publicDir: 'src/assets',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    historyApiFallback: true,
  },
  build: {
    //chunkSizeWarningLimit: 1000,
    assetsInclude: ['src/assets/**/*'],
    assetsInlineLimit:0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        //assets: resolve(__dirname, 'src/assets'),
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Add other chunks as needed
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        }
      }
    },
  },
}})
