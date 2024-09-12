import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/rest-countries-api-with-color-theme-switcher',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@imgs': fileURLToPath(new URL('./src/assets/imgs', import.meta.url))
        }
    }
});
