import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Import PostCSS and its plugins
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/room-homepage-master',
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer],
        },
    },
});
