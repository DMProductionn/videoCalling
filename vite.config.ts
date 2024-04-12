import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible';



export default defineConfig({
  plugins: [react(),
    envCompatible()
  ],
  resolve: {
    alias: {
      "simple-peer": "simple-peer/simplepeer.min.js",
    },
  },
  server: {
    port: 3000
  }
})
