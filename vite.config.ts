import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // componentTagger disabled temporarily due to dependency conflict
    // Re-enable when the rollup dependency issue is resolved
    // mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    reportCompressedSize: false,
    assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.hdr'],
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;

          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/react-router-dom/') ||
            id.includes('/scheduler/')
          ) {
            return 'react-vendor';
          }

          if (
            id.includes('/three/') ||
            id.includes('/three-stdlib/')
          ) {
            return 'three-core';
          }

          if (
            id.includes('/@react-three/') ||
            id.includes('/maath/') ||
            id.includes('/meshline/')
          ) {
            return 'three-react';
          }

          if (id.includes('/framer-motion/')) {
            return 'motion-vendor';
          }

          if (
            id.includes('/@radix-ui/') ||
            id.includes('/react-hook-form/') ||
            id.includes('/@hookform/') ||
            id.includes('/zod/') ||
            id.includes('/sonner/') ||
            id.includes('/cmdk/')
          ) {
            return 'ui-vendor';
          }

          if (
            id.includes('/@tanstack/') ||
            id.includes('/embla-carousel-react/') ||
            id.includes('/class-variance-authority/') ||
            id.includes('/clsx/') ||
            id.includes('/tailwind-merge/') ||
            id.includes('/lucide-react/')
          ) {
            return 'app-vendor';
          }
        },
      },
    },
  },
  // Optimize asset serving
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.hdr'],
  // Enable compression in preview mode
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
}));
