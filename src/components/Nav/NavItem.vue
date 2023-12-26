<script setup>

const props = defineProps([
    'route',
    'text'
])

</script>

<template>
  <v-btn :to="props.route" class="hover:text-red-500" variant="text">{{ props.text }}</v-btn>
</template>
