import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

export function loadEnvFromVercel() {
  try {
    const path = resolve(process.cwd(), 'vercel.json');
    if (!existsSync(path)) {
      console.log('[load-env] vercel.json not found at', path);
      return;
    }
    const json = JSON.parse(readFileSync(path, 'utf-8'));
    const env = json.env || {};
    let loaded = 0;
    for (const [key, value] of Object.entries(env)) {
      if (typeof value === 'string' && !process.env[key]) {
        process.env[key] = value;
        loaded++;
      }
    }
    console.log(`[load-env] Loaded ${loaded} env vars from vercel.json`);
  } catch (e) {
    console.error('[load-env] Failed to read vercel.json:', e.message);
  }
}

// Auto-run when imported
loadEnvFromVercel();