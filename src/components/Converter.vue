<script setup>
import {computed, ref} from 'vue'

const stones = ref('0')
const pounds = ref('0')
const kilos = ref('0')

function handleStonesAndPoundsUpdate({target}) {
  kilos.value = Math.round((stones.value * 14 + pounds.value) / 2.2).toFixed(2)
}

function handleKilosUpdate({target}) {
  stones.value = Math.floor((kilos.value * 2.2) / 14).toFixed(0)
  pounds.value = Math.round(((kilos.value * 2.2) / 14 - stones.value) * 14).toFixed(0)
}
</script>

<template>
  <v-card title="Weight converter" subtitle="Stones and Pounds to Kilos" elevation="12">
    <form class="max-w-sm mx-auto flex flex-col">
      <v-text-field label="Stones" type="number" name="stones" v-model.number="stones" @change="handleStonesAndPoundsUpdate" />
      <v-text-field label="Pounds" type="number" name="pounds" v-model.number="pounds" @change="handleStonesAndPoundsUpdate" />
      <v-text-field label="Kilos" type="number" name="kilos" v-model.number="kilos" @change="handleKilosUpdate" />
    </form>
  </v-card>
</template>
