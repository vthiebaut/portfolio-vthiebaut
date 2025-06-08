import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import * as dotenv from 'dotenv'
import tailwindcss from '@tailwindcss/vite'
dotenv.config()

export default defineConfig({
  envPrefix: 'VITE_',
  plugins: [
    vue(),
    tailwindcss()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  build: {
    sourcemap: true
  },
  server: {
    host: true, // permet d'écouter toutes les IP (ex: 192.168.x.x)
    port: 5173  // optionnel : tu peux changer le port ici si besoin
  }
})
