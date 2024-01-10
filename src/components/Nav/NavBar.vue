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
  <nav>
    <ul class="left-items">
      <li v-for="item of navItems">
        <nav-item :text="item.text" :route="item.route" />
      </li>

      <li v-if="authStore.isLoggedIn">
        <v-btn @click="logout()" variant="text">Logout</v-btn>
      </li>
      <li v-if="! authStore.isLoggedIn">
        <nav-item :route="{name: 'register'}" text="Register" />
        <nav-item :route="{name: 'login'}" text="Log in" />
      </li>
    </ul>
    <ul class="right-items">
      <v-btn icon="mdi-account-circle" variant="plain" :to="{name: 'profile'}" title="Your profile" />
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }

  ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  a:hover, button:hover {
    /* Tailwind red-500 */
    color: #ef4444;
  }
</style>