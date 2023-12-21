<script setup>
import {computed, ref} from 'vue'

const stones = ref(0)
const pounds = ref(0)
const kilos = computed(() => Math.round((stones.value * 14 + pounds.value) / 2.2))
</script>

<template>
  <form class="max-w-sm mx-auto grid grid-cols-2 gap-y-4">
    <label class="flex items-center">Stones</label>
    <input type="number" v-model.number="stones" class="text-white border border-slate-800 bg-slate-700 px-2 py-1 rounded w-full" />

    <label class="flex items-center">Pounds</label>
    <input type="number" v-model.number="pounds" class="text-white border border-slate-800 bg-slate-700 px-2 py-1 rounded w-full" />

    <label class="flex items-center">Kilos</label>
    <input type="number" v-model.number="kilos" class="text-white border border-slate-800 bg-slate-700 px-2 py-1 rounded w-full" />
  </form>
</template>
