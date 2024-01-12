import {supabaseClient} from "../helpers/supabaseClient.js";

export async function getUserPermissions() {
    const supabase = supabaseClient()

    const { data, error } = await supabase.from('user_permissions').select('permissions(name)')

    if (error) {
        throw new Error(error.message)
    }

    return data.map(({permissions: permission}) => permission.name)
}
