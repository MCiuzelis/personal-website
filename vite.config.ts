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
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor libraries
          'vendor-react': ['react', 'react-dom'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-ui': ['framer-motion', '@radix-ui/react-dialog', '@radix-ui/react-navigation-menu'],
          'vendor-router': ['react-router-dom'],
          'vendor-query': ['@tanstack/react-query'],
          
          // Page chunks for better caching
          'pages-robots': [
            './src/pages/VLR_Page',
            './src/pages/SwervePage', 
            './src/pages/FLL_Page',
            './src/pages/FirstGlobalPage'
          ],
          'pages-projects': [
            './src/pages/CombustionEngine',
            './src/pages/KineticLaunchPlatform',
            './src/pages/RubensTube'
          ],
          
          // Heavy 3D components
          'components-3d': [
            './src/components/VLR_Robot',
            './src/components/SwerveRobot',
            './src/components/FLL_Robot'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 600, // Increase from default 500kb
  },
}));
