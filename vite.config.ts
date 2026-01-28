import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Automatische Erkennung: 
    // Wenn wir in GitHub Actions sind UND kein Custom-Domain-Secret gesetzt ist,
    // nutzen wir den Repository-Namen als Base.
    let base = '/';
    if (process.env.GITHUB_ACTIONS === 'true' && !env.CUSTOM_DOMAIN) {
      base = '/vi/';
    }

    return {
      base: base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
