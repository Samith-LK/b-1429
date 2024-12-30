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
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('@tanstack')) {
              return 'vendor-tanstack';
            }
            if (id.includes('lucide')) {
              return 'vendor-icons';
            }
            return 'vendor';
          }
          // UI components chunk
          if (id.includes('components/ui/')) {
            return 'ui-components';
          }
          // Route-based code splitting
          if (id.includes('pages/')) {
            return 'pages';
          }
        },
        // Optimize chunk naming and caching
        chunkFileNames: (chunkInfo) => {
          const hash = chunkInfo.hash.slice(0, 8);
          return `assets/js/[name].[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop();
          return `assets/${ext}/[name].[hash].${ext}`;
        }
      }
    },
    // Enable source maps only in development
    sourcemap: mode === 'development',
    // Optimize asset size
    assetsInlineLimit: 4096,
    // Report on chunk sizes
    chunkSizeWarningLimit: 1000,
    // Optimize CSS
    cssCodeSplit: true,
    // Enable module preload
    modulePreload: {
      polyfill: true
    },
    // Improve build performance
    target: 'esnext',
    reportCompressedSize: false
  },
  // Configure base URL for GitHub Pages
  base: '/portfolio/', // Replace 'portfolio' with your repository name
  // Optimize dev server
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-query']
  },
  // Enable caching
  cacheDir: '.vite'
}));