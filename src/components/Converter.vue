<script setup>
import {computed, ref} from 'vue'

const stones = ref('0')
const pounds = ref('0')
const kilos = ref('0')

function handleStonesAndPoundsUpdate({target}) {
  const s = parseInt(stones.value)
  const p = parseInt(pounds.value)
  kilos.value = Math.round((s * 14 + p) / 2.2).toFixed(0)
}

function handleKilosUpdate({target}) {
  const k = parseInt(kilos.value)
  stones.value = Math.floor((k * 2.2) / 14).toFixed(0)

  const s = parseInt(stones.value)
  pounds.value = Math.round(((k * 2.2) / 14 - s) * 14).toFixed(0)
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
