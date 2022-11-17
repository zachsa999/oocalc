import { createClient } from "@supabase/auth-helpers-sveltekit";
import { e as env } from "./env-public.js";
createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY);
