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
    reportCompressedSize: false, // Faster builds
    rollupOptions: {
      output: {
        // More aggressive chunking for better caching
        manualChunks: (id) => {
          // Core React - ensure it's always available and comes first
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react'
          }
          // Three.js ecosystem - but keep React separate to avoid circular deps
          if (id.includes('node_modules/three/')) {
            return 'vendor-three-core'
          }
          if (id.includes('@react-three')) {
            return 'vendor-three-react'
          }
          // UI libraries (including Radix which needs React context)
          if (id.includes('framer-motion') || id.includes('@radix-ui')) {
            return 'vendor-ui'
          }
          // Router
          if (id.includes('react-router')) {
            return 'vendor-router'
          }
          // Query
          if (id.includes('@tanstack')) {
            return 'vendor-query'
          }
          // Robot pages
          if (id.includes('/VLR_Page') || id.includes('/SwervePage') || 
              id.includes('/FLL_Page') || id.includes('/FirstGlobalPage')) {
            return 'pages-robots'
          }
          // Project pages  
          if (id.includes('/CombustionEngine') || id.includes('/KineticLaunchPlatform') || 
              id.includes('/RubensTube')) {
            return 'pages-projects'
          }
          // 3D components
          if (id.includes('Robot.tsx') || id.includes('Robot.jsx')) {
            return 'components-3d'
          }
          // Images and assets
          if (id.includes('/assets/') || id.includes('.png') || id.includes('.jpg') || 
              id.includes('.jpeg') || id.includes('.webp')) {
            return 'assets'
          }
          // GLB models
          if (id.includes('.glb') || id.includes('.gltf')) {
            return 'models'
          }
          // Videos
          if (id.includes('.mp4') || id.includes('.webm')) {
            return 'videos'
          }
        },
        // Optimize asset naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1] || ''
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/mp4|webm|ogg|mp3|wav|flac|aac/i.test(ext)) {
            return `assets/media/[name]-[hash][extname]`
          }
          if (/glb|gltf/i.test(ext)) {
            return `assets/models/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js'
      },
      // Optimize external dependencies - ensure React is properly resolved
      external: [],
      // Preserve module structure for React ecosystem
      preserveEntrySignatures: 'allow-extension',
    },
    // Optimize asset handling
    assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.hdr'],
    chunkSizeWarningLimit: 800, // Allow larger chunks for 3D assets
  },
  // Optimize asset serving
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.hdr'],
  // Optimize dependencies for better performance
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'framer-motion'
    ],
    // Force pre-bundling of React to ensure proper context sharing
    force: mode === 'production'
  },
  // Enable compression in preview mode
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
}));
