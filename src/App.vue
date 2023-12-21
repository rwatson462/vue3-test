<script setup>

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
    </ul>
  </nav>
  <router-view />
</template>
