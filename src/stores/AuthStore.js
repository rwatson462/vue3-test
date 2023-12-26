import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {supabaseClient} from "../helpers/supabaseClient.js";
import {Router} from "../routing/Router.js";

export const useAuthStore = defineStore(
    'auth',
    () => {
        const supabase = supabaseClient()

        const user = ref(null)
        const isLoggedIn = computed(() => !!user.value)

        async function refreshUser() {
            const {data} = await supabase.auth.getSession()
            user.value = data.session?.user
        }

        async function login(email, password) {
            if (email.length === 0 || password.length === 0) {
                throw new Error('Email address and password must be given')
            }

            const {data, error} = await supabase.auth.signInWithPassword({email, password,})

            // Supabase doesn't throw an error if the user is already registered, however it does populate an error property
            if (error) {
                throw new Error(error.message)
            }

            if (data.user && data.user.email === email) {
                // Store the logged in user
                user.value = data.user

                // Success!
                return true
            }
        }

        async function register(email, password) {
            const {data, error} = await supabase.auth.signUp({
                email: email,
                password: password,
            })

            // Supabase may populate an error property if something goes wrong, we'll catch that here and re-throw
            if (error) throw new Error(error.message)
        }

        async function logout() {
            await supabase.auth.signOut()
            user.value = null
        }

        return {
            user,
            isLoggedIn,
            login,
            register,
            refreshUser,
            logout,
        }
    }
)