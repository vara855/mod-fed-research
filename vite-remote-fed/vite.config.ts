import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// ! REMOTE VITE
export default defineConfig({
    build: {
        target: 'esnext',
    },
    plugins: [
        react(),
        federation({
            name: 'vite-widget',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './card': './src/card.tsx',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
});
