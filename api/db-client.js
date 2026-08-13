import dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js';
import { triggerRestore } from './db-wake.js';

// Load environment variables with NEXT_PUBLIC_ prefix for Vite/Render compatibility
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('[db-client] Environment variables:', {
    SUPABASE_URL: SUPABASE_URL ? '✓ Loaded' : '✗ Missing',
    SUPABASE_KEY: SUPABASE_KEY ? '✓ Loaded' : '✗ Missing',
  });
  throw new Error(
    `[db-client] Missing Supabase credentials.\n` +
    `  SUPABASE_URL: ${SUPABASE_URL ? 'Loaded' : 'NOT FOUND'}\n` +
    `  SUPABASE_KEY: ${SUPABASE_KEY ? 'Loaded' : 'NOT FOUND'}\n` +
    `  Ensure .env has NEXT_PUBLIC_ prefixed variables.\n` +
    `  Or check vercel.json/Render environment settings.`
  );
}

console.log('[db-client] ✓ Supabase client initialized successfully');

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  global: {
    fetch: async (url, options) => {
      const res = await fetch(url, options);
      if (!res.ok && res.status >= 500) triggerRestore();
      return res;
    },
  },
});

export default supabase;