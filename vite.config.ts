import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path';


const projectRoot = path.resolve(__dirname, './');
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],

    resolve: {
        alias: {
            '@': path.resolve(projectRoot, 'src'),
            // Алиасы для слоев FSD:
            '@app': path.resolve(projectRoot, 'src/01_app'),
            '@pages': path.resolve(projectRoot, 'src/03_pages'),
            '@widgets': path.resolve(projectRoot, 'src/04_widgets'),
            '@features': path.resolve(projectRoot, 'src/05_features'),
            '@entities': path.resolve(projectRoot, 'src/06_entities'),
            '@shared': path.resolve(projectRoot, 'src/07_shared'),
            '@styles': path.resolve(projectRoot, 'src/07_shared/styles'),
            '@assets': path.resolve(projectRoot, 'src/07_shared/assets')
        },
    },
})
