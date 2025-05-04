import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/will-i-pr',
  build: {
    outDir: 'docs/',
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
        port: 3001,
    },
  }
})
