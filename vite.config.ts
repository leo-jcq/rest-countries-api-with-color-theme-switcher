import react from '@vitejs/plugin-react-swc';
import sass from 'sass';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/rest-countries-api-with-color-theme-switcher/',
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass
            }
        }
    }
});
