import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://vrx2314.github.io/Personal-Portfolio-React/",
  plugins: [react()],
})
