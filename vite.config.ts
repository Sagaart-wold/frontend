import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  // resolve:{
  //   alias:{
  //     '@': path.resolve(__dirname,'/src'),
  //     '@assets': path.resolve(__dirname,'/src/assets'),
  //     '@components': path.resolve(__dirname,'/src/components'),
  //     '@store': path.resolve(__dirname,'/src/store'),
  //     '@api': path.resolve(__dirname,'/src/api'),
  //     '@utils': path.resolve(__dirname,'/src/utils'),
  //   }
  // },
  plugins: [react()],
})


