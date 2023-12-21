<script setup>
import Converter from "./components/Converter.vue";
</script>

<template>
  <header class="flex space-x-4 items-center justify-center rounded-xlp-2">
    <h1 class="text-3xl font-bold">Vue3 demo!</h1>
  </header>
  <section class="flex flex-col space-y-4 py-4">
    <p>In this 'ere demo, I present a converter from Pounds and Stone to Kilograms!</p>
    <p>Sound be easy to figure out - add Stone and Pounds below and see the Kilos being updated</p>
  </section>
  <Converter />
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
