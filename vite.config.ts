import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';

const reactPlugin = react();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: env.FRONTEND_FOLDER,
    define: {
      'process.env.BASE_URL_PROD': JSON.stringify(env.BASE_URL_PROD),
      'process.env.FRONTEND_FOLDER': JSON.stringify(env.FRONTEND_FOLDER),
      'process.env.BASE_URL_DEV': JSON.stringify(env.BASE_URL_DEV),
      'process.env.FRONT_URL': JSON.stringify(env.FRONT_URL),
    },
    plugins: [react()],
    build: {
      chunkSizeWarningLimit: 100,
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
            return;
          }
          warn(warning);
        },
      },
    },
    worker: {
      plugins: [reactPlugin],
      format: 'es',
    },
  }
})