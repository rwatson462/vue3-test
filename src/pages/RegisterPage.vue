<script setup>

import {ref} from "vue";
import {useAuthStore} from "../stores/AuthStore.js";
import {Router} from "../routing/Router.js";

const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const submitting = ref(false)
const error = ref('')

async function submitForm() {
  error.value = ''
  submitting.value = true

  authStore.register(email.value, password.value)
      .then(() => Router.push({name: 'home'}))
      .catch(e => error.value = e.value)
      .finally(() => submitting.value = false)
}
</script>

<template>
  <section class="flex flex-col space-y-4 py-4">
    <p>Some parts of this app require you to be logged in.</p>
    <p>If you've already created an account, <router-link :to="{name: 'login'}" class="text-blue-500 hover:text-red-500 font-semibold">log in here</router-link></p>
    <p>
      Please fill out the form below to create an account - I'll only use your email address for the purposes of
      using this app, nothing else.
    </p>
  </section>
  <v-card title="Register">
    <v-card-text>
      In the interests of quick access I'm not mandating you verify your email address so please make sure you type it
      correctly!
    </v-card-text>
    <form class="max-w-sm mx-auto flex flex-col p-4" @submit.prevent="submitForm()">
      <v-text-field label="Email address" type="email" name="email" v-model="email" :disabled="submitting" />
      <v-text-field label="Password" type="password" name="password" v-model="password" :disabled="submitting" />
      <v-btn type="submit" text="Create account" variant="tonal" :disabled="submitting" />
      <v-card-text class="text-red-500" v-if="error">{{ error }}</v-card-text>
    </form>
  </v-card>
</template>
