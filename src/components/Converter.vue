<script setup>
import {ref} from 'vue'
import {convertImperialToMetric, convertMetricToImperial} from "../helpers/converter.js";

const stonesRef = ref(0)
const poundsRef = ref(0)
const kilosRef = ref(0)

const imperialDisabled = ref(false)
const metricDisabled = ref(false)

async function handleImperialUpdate() {
  metricDisabled.value = true

  convertImperialToMetric(stonesRef.value, poundsRef.value)
      .then(kilos => kilosRef.value = kilos)
      .finally(() => metricDisabled.value = false)
}

async function handleMetricUpdate() {
  imperialDisabled.value = true

  convertMetricToImperial(kilosRef.value)
      .then(({stones, pounds}) => {
        stonesRef.value = stones
        poundsRef.value = pounds
      })
      .finally(() => imperialDisabled.value = false)
}
</script>

<template>
  <v-card title="Weight converter" subtitle="Stones and Pounds to Kilos">
    <form class="max-w-sm mx-auto flex flex-col px-4">
      <v-text-field label="Stones" type="number" name="stones" v-model.number="stonesRef" @change="handleImperialUpdate" :disabled="imperialDisabled" />
      <v-text-field label="Pounds" type="number" name="pounds" v-model.number="poundsRef" @change="handleImperialUpdate" :disabled="imperialDisabled" />
      <v-text-field label="Kilos" type="number" name="kilos" v-model.number="kilosRef" @change="handleMetricUpdate" :disabled="metricDisabled" />
    </form>
  </v-card>
</template>
