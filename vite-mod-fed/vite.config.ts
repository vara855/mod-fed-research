import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// ! HOST
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: 'next',
    },
    plugins: [
        react(),
        federation({
            name: 'vite-widget',
            filename: 'remoteEntry.js',
            remotes: {
                'vite-widget': {
                    external: 'http://localhost:4173/assets/remoteEntry.js',
                    format: 'esm',
                },
            },
            // Modules to expose
            exposes: {
                './widget': './src/widget.tsx',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
});
