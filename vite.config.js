import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // For GitHub Pages - adjust this if you're using a custom domain
  // If using ironidols.com, set base to '/'
  // If using username.github.io/iron-idols, set base to '/iron-idols/'
  base: '/',

  server: {
    host: '0.0.0.0',
    port: 5173,
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
