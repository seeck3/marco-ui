import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), tailwindcss(), dts()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyUILibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `marco-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
