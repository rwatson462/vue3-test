import {routes} from "./Routes.js";
import {createRouter, createWebHistory} from "vue-router";
import {useAuthStore} from "../stores/AuthStore.js";

export const Router = createRouter({
    history: createWebHistory(),
    routes,
})

Router.beforeEach(async to => {
    const authStore = useAuthStore()

    await authStore.refreshUser()

    if (to.meta.requiresAuth === true && !authStore.isLoggedIn) {
        // not signed in to page that requires login
        // todo get page details of requested page so we can redirect to it after login
        return { name: 'login' }
    }
})
