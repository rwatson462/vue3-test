import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Router} from "./routing/Router.js";
import {Vuetify} from "./Vuetify.js";

createApp(App)
    .use(Vuetify)
    .use(Router)
    .mount('#app')
