import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import * as dotenv from 'dotenv'
import tailwindcss from '@tailwindcss/vite'
import Pages from 'vite-plugin-pages'
import Sitemap from 'vite-plugin-sitemap'

dotenv.config()

export default defineConfig({
  envPrefix: 'VITE_',
  plugins: [
    vue(),
    tailwindcss(),
    Pages(), // si tu utilises les routes automatiques
    Sitemap({
      hostname: 'https://portfolio.vthiebaut.fr',
      // facultatif : exclusion d’URL si besoin
      // exclude: ['/admin']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue': path.resolve(__dirname, 'node_modules/vue')
    }
  },
  build: {
    sourcemap: true
  },
  server: {
    host: true,
    port: 5173
  }
})
