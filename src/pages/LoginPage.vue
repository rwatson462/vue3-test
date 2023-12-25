<script setup>
import {ref} from "vue";
import {Router} from "../routing/Router.js";
import {useAuthStore} from "../stores/AuthStore.js";

const authStore = useAuthStore()

const emailRef = ref('')
const passwordRef = ref('')
const error = ref('')
const submitting = ref(false)

function login() {
  submitting.value = true
  error.value = ''

  authStore.login(emailRef.value, passwordRef.value)
      .then(() => Router.push({name: 'home'}))
      .catch((e) => error.value = e.message)
      .finally(() => submitting.value = false)
}

</script>

<template>
  <section class="flex flex-col space-y-4 py-4">
    <p>
      Some pages on this site require you to be logged in, because it stores data that needs to be associated with you.
      If you're already created an account, sign in here.
    </p>
    <p>
      Otherwise, pop on over to
      <router-link :to="{name: 'register'}" class="hover:text-red-500 text-blue-500 font-semibold">register</router-link>.
    </p>
  </section>
  <v-card title="Log in">
    <form class="max-w-sm mx-auto flex flex-col p-4" @submit.prevent="login()">
      <v-text-field label="Email address" type="email" name="email" v-model="emailRef" :disabled="submitting" />
      <v-text-field label="Password" type="password" name="password" v-model="passwordRef" :disabled="submitting" />
      <v-btn type="submit" text="Create account" variant="tonal" :disabled="submitting" />
      <v-card-text class="text-red-500" v-if="error">{{ error }}</v-card-text>
    </form>
  </v-card>
</template>
