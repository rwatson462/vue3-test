<script setup>

import {useAuthStore} from "../../stores/AuthStore.js";
import NavItem from "./NavItem.vue";

const authStore = useAuthStore()

const navItems = [
  {
    route: {name: 'home'},
    text: 'Home'
  },
  {
    route: {name: 'converter'},
    text: 'Converter'
  },
  {
    route: {name: 'todo'},
    text: 'Todo'
  }
]

function logout() {
  authStore.logout()
      .then(() => location.reload())
}

</script>

<template>
  <nav class="py-4">
    <ul class="flex gap-4 justify-center items-center">
      <li v-for="item of navItems">
        <nav-item :text="item.text" :route="item.route" />
      </li>

      <li v-if="authStore.isLoggedIn">
        <v-btn @click="logout()" class="hover:text-red-500" variant="text">Logout</v-btn>
      </li>
      <li v-if="! authStore.isLoggedIn">
        <nav-item :route="{name: 'register'}" text="Register" />
        <nav-item :route="{name: 'login'}" text="Log in" />
      </li>
    </ul>
  </nav>
</template>
