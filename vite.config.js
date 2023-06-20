import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  appType: 'spa',
  root: 'src',
  build: {
    outDir: '../build',
    emptyOutDir: true,
    cssMinify: true,
  },
  plugins: [createHtmlPlugin({
    minify: true,
  })]
})