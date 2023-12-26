import {createClient} from "@supabase/supabase-js";
import {SUPABASE_KEY, SUPABASE_URL} from "../config/Supabase.js";

const client = createClient(SUPABASE_URL, SUPABASE_KEY)

export function supabaseClient() {
    return client
}
