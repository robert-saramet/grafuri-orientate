import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src/', import.meta.url)) },
      { find: '@/components', replacement: fileURLToPath(new URL('./src/lib/components', import.meta.url)) },
      { find: '@/lib', replacement: fileURLToPath(new URL('./src/lib', import.meta.url)) },
      { find: '@/navbar', replacement: fileURLToPath(new URL('./src/lib/navbar', import.meta.url)) },
      { find: '@/hero', replacement: fileURLToPath(new URL('./src/lib/hero', import.meta.url)) },
      { find: '@/footer', replacement: fileURLToPath(new URL('./src/lib/footer', import.meta.url)) },
      { find: '@/pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
    ]
  }
})
