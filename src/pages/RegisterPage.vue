<script setup>

import {ref} from "vue";
import {supabaseClient} from "../helpers/createSupabaseClient.js";

const emailRef = ref('')
const passwordRef = ref('')
const submitting = ref(false)
const error = ref('')

function submitForm() {
  error.value = ''
  submitting.value = true

  const supabase = supabaseClient()

  supabase.auth.signUp({
    email: emailRef.value,
    password: passwordRef.value,
  })
      .then(({data, error}) => {
        // Supabase doesn't throw an error if the user is already registered, however it does populate an error property
        if (error) throw new Error(error.message)

        // Success!
        console.log(data)
      })
      .catch(message => error.value = message)
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
      <v-text-field label="Email address" type="email" name="email" v-model="emailRef" :disabled="submitting" />
      <v-text-field label="Password" type="password" name="password" v-model="passwordRef" :disabled="submitting" />
      <v-btn type="submit" text="Create account" variant="tonal" :disabled="submitting" />
      <v-card-text class="text-red-500" v-if="error">{{ error }}</v-card-text>
    </form>
  </v-card>
</template>
