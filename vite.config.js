import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '6e8f-2806-2f0-7421-a9c2-b8b0-f4f2-da70-c1a5.ngrok-free.app',
      'localhost',
    ],
  },
})