import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable minification and optimization
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Chunk vendor modules
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
          // Chunk UI components
          if (id.includes('components/ui/')) {
            return 'ui-components';
          }
        }
      }
    },
    // Enable chunk size warnings
    chunkSizeWarningLimit: 1000
  },
  base: '/portfolio/' // Replace 'portfolio' with your repository name
}));