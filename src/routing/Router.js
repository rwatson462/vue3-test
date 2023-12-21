import {routes} from "./Routes.js";
import {createRouter, createWebHistory} from "vue-router";

export const Router = createRouter({
    history: createWebHistory(),
    routes,
})
