import { createBrowserClient } from '@supabase/auth-helpers-nextjs';

// Client Supabase pour le navigateur : utilise uniquement la clé anonyme
export const supabaseBrowser = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
