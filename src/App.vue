<script setup>

</script>

<template>
  <header class="flex space-x-4 items-center justify-center rounded-xlp-2">
    <h1 class="text-3xl font-bold">Vue3 demo!</h1>
  </header>
  <nav>
    <ul class="flex gap-4">
      <li><router-link to="/" class="text-blue-500 hover:text-red-500 font-bold">Home</router-link></li>
      <li><router-link to="/converter" class="text-blue-500 hover:text-red-500 font-bold">Converter</router-link></li>
      <li><router-link to="/todo" class="text-blue-500 hover:text-red-500 font-bold">Todo</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
