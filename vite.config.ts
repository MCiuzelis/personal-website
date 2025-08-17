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
