import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, mkdirSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    // Copy data files to public during build
    {
      name: 'copy-data-files',
      buildStart() {
        // Copy data files to public during development and build
        try {
          mkdirSync('public/data', { recursive: true });
          copyFileSync('data/network.json', 'public/data/network.json');
          copyFileSync('data/events.json', 'public/data/events.json');
        } catch (error) {
          console.warn('Could not copy data files:', error);
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2015',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
