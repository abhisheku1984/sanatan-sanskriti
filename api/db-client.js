import { createClient } from '@supabase/supabase-js';
import { triggerRestore } from './db-wake.js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error(
    `[db-client] Missing Supabase credentials.\n` +
    `  Ensure vercel.json env vars were loaded (check [load-env] log above).`
  );
}

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