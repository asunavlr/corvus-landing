import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Sem isto, o React entra no build de produção pela porta de desenvolvimento
  // (react-dom-client.development.js sozinho tem 1 MB de fonte) e o bundle
  // fica três vezes maior do que precisa.
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
})
