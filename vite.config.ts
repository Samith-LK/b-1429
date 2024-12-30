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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-tanstack': ['@tanstack/react-query'],
          'vendor-icons': ['lucide-react'],
          'vendor': [
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
            'class-variance-authority',
            'clsx',
            'tailwind-merge'
          ],
          'ui': [
            './src/components/ui/button',
            './src/components/ui/toast',
            './src/components/ui/skeleton',
            './src/components/ui/use-toast'
          ]
        },
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (!name) return 'assets/misc/[hash][extname]';
          const extType = name.split('.').pop();
          return `assets/${extType}/[name].[hash][extname]`;
        }
      }
    },
    sourcemap: mode === 'development',
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true
    },
    target: 'esnext',
    reportCompressedSize: false
  },
  base: '/b-1429/', // Replace 'portfolio' with your repository name
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-query']
  },
  cacheDir: '.vite'
}));