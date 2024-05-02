import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open: true,
    "dev": "vite --host 0.0.0.0",
  },
  plugins: [react()],
})
