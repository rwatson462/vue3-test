// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const Vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
    },
    components,
    directives,
})