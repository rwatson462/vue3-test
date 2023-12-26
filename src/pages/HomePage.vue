<script setup>

</script>

<template>
  <section class="flex flex-col space-y-4 py-4">
    <p>This is a demo of Vue3 so I can learn all about how it works</p>
    <p>Click the links above to navigate around the pages</p>
    <v-sheet class="p-4">
      <p>Features:</p>
      <ul class="pl-4 list-disc">
        <li>Weight converter using a Pinia store to share state between components</li>
        <li>
          User registration and authentication using Supabase for Auth persistence, and a Pinia store to manage that
          in the app
        </li>
        <li>Routing including restricted routes for logged-in users only (using Vue router)</li>
        <li>
          Simple Todo list - Create Todos, view the list of them.  Created using Pinia store backed by Supabase
          database.  Automatically "tenanted" to the logged in user.
        </li>
      </ul>
    </v-sheet>
  </section>
</template>
