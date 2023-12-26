<script setup>
  import {useAuthStore} from "../stores/AuthStore.js";
  import {env} from "../helpers/env.js";

  const authStore = useAuthStore()
</script>

<template>
  <footer class="text-center text-sm rounded-xl text-gray-600 border-t border-gray-600 p-2 m-2" v-if="authStore.user">
    <p>{{ authStore.user.email}}</p>
  </footer>
</template>
