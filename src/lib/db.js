import { createClient } from '@supabase/supabase-js'
import { setupSupabaseHelpers } from '@supabase/auth-helpers-sveltekit'
import { dev } from '$app/environment'
import { env } from '$env/static/public'
// or use the static env
// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabaseClient = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY, {
    persistSession: false,
    autoRefreshToken: false,
})

setupSupabaseHelpers({
    supabaseClient,
    cookieOptions: {
        secure: !dev,
    },
})