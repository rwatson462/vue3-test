# Vue3 demo app

A demo app with Vue3 hosted on Vercel, here: https://vue3-test-phi.vercel.app/

## Features

1. Vue3 using Composition API
2. Vuetify for UI components
3. Vue Router for navigation
4. Pinia for state management
5. Supabase for Authentication and database

## Challenges faced

1. .env support 🙈.  It took me _too long_ to realise I needed to prefix vars with `VITE_`.  I now have a env helper
   function to fetch vars for me and automatically prepend `VITE_` because I don't like the idea of writing that
   everywhere. 
2. Configuring Vercel to point all requests into `/index.html` so accessing `/login` does not result in a 404.
