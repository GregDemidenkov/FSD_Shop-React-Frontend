import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'


export default defineConfig({
  resolve:{
    alias: [
      { find: '@app', replacement: path.resolve(__dirname, 'src/app') },
      { find: '@entities', replacement: path.resolve(__dirname, 'src/entities') },
      { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@widgets', replacement: path.resolve(__dirname, 'src/widgets') },
    ],
  },
  plugins: [react()],
})
