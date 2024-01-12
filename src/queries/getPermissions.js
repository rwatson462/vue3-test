import {supabaseClient} from "../helpers/supabaseClient.js";

export async function getPermissions() {
    const supabase = supabaseClient()

    const { data, error } = await supabase.from('permissions').select('id, name')

    if (error) {
        throw new Error(error.message)
    }

    return data
}