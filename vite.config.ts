import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/texas-2025',
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
})
