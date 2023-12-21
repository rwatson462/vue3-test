<script setup>
import {computed, ref} from 'vue'

const stones = ref(0)
const pounds = ref(0)
const kilos = computed(() => Math.round((stones.value * 14 + pounds.value) / 2.2))
</script>

<template>
  <v-card title="Weight converter" subtitle="Stones and Pounds to Kilos" elevation="12">
  <form class="max-w-sm mx-auto flex flex-col">
    <v-text-field label="Stones" type="number" v-model.number="stones" />

    <v-text-field label="Pounds" type="number" v-model.number="pounds" />

    <v-text-field label="Kilos" type="number" v-model.number="kilos" />
  </form>
  </v-card>
</template>
