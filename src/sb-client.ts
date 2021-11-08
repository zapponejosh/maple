import { createClient } from '@supabase/supabase-js';

// client will be used in login/signup functions, set session/auth and data fetching
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
