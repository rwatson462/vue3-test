import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Router} from "./routing/Router.js";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const Vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
    },
    components,
    directives,
})

createApp(App)
    .use(Vuetify)
    .use(Router)
    .mount('#app')
