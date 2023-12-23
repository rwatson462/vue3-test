import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Router} from "./routing/Router.js";
import {Vuetify} from "./Vuetify.js";
import {createPinia} from "pinia";

const Pinia = createPinia()

createApp(App)
    .use(Vuetify)
    .use(Pinia)
    .use(Router)
    .mount('#app')
