import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/t-shirt_designer_three.js/',
  plugins: [react()],
})
