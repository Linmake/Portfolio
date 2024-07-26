import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    host: true
  },
  plugins: [
    react(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: 'public/icons/*',
    //       dest: 'icons'
    //     }
    //   ]
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  }
});
