<script setup>
import {useAuthStore} from "./stores/AuthStore.js";

const authStore = useAuthStore()

function logout() {
  authStore.logout()
      .then(() => location.reload())
}
</script>

<template>
  <header class="flex space-x-4 items-center justify-center rounded-xlp-2">
    <h1 class="text-3xl font-bold">Vue3 demo!</h1>
  </header>
  <nav class="py-4">
    <ul class="flex gap-4 justify-center items-center">
      <li><v-btn :to="{name: 'home'}" class="hover:text-red-500" variant="text">Home</v-btn></li>
      <li><v-btn :to="{name: 'converter'}" class="hover:text-red-500" variant="text">Converter</v-btn></li>
      <li><v-btn :to="{name: 'todo'}" class="hover:text-red-500" variant="text">Todo</v-btn></li>
      <li v-if="authStore.isLoggedIn"><v-btn @click="logout()" class="hover:text-red-500" variant="text">Logout</v-btn></li>
      <li v-if="! authStore.isLoggedIn">
        <v-btn :to="{name: 'register'}" class="hover:text-red-500" variant="text">Register</v-btn>
        <v-btn :to="{name: 'login'}" class="hover:text-red-500" variant="text">Log in</v-btn>
      </li>
    </ul>
  </nav>
  <router-view />
  <footer class="text-center text-sm text-gray-600 border-t border-gray-600 pt-2 mt-2" v-if="authStore.user">
    <p>{{ authStore.user.id}}</p>
  </footer>
</template>
