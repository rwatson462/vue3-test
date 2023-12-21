<script setup>

</script>

<template>
  <v-list>
    <v-list-item v-for="n in 4" :key="n" :title="'Item '.concat(n)" :subtitle="'Do this sometime please'" />
  </v-list>
</template>

<style scoped>

</style>