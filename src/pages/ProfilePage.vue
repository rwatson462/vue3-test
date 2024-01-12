<script setup>
import {supabaseClient} from "../helpers/supabaseClient.js";
import {ref} from "vue";
import {getUserPermissions} from "../queries/getUserPermissions.js";
import {getUser} from "../queries/getUser.js";

const supabase = supabaseClient()

const errorMessage = ref('')
const user = ref({})
const form = ref({
  name: '',
})
const loading = ref(false)

async function reloadUser() {
  user.value = await getUser()
  form.value = {
    name: user.value.user_metadata.name
  }
}

reloadUser()

const userPermissions = ref([])

getUserPermissions()
    .then(permissions => userPermissions.value = permissions)
    .catch(error => errorMessage.value = error)

async function updateProfile() {
  loading.value = true

  const {error} = await supabase.auth.updateUser({
    data: {
      name: form.value.name,
    }
  })
  if (error) {
    errorMessage.value = error
    loading.value = false
    return
  }
  await reloadUser()

  loading.value = false
}

</script>

<template>
  <p v-if={errorMessage} class="text-sm text-red-500">{{ errorMessage }}</p>

  <form @submit.prevent="updateProfile()" class="my-4">
    <v-card variant="elevated">
      <v-text-field v-model="form.name" label="Name"/>
      <v-card-actions>
        <v-btn type="submit" variant="tonal" color="primary" :disabled="loading">Update profile</v-btn>
      </v-card-actions>
    </v-card>
  </form>

  <v-divider/>

  <v-card variant="elevated" class="my-4">
    <v-card-title>Your permissions</v-card-title>
    <v-divider/>
    <v-list>
      <v-list-item v-for="(permission, key) in userPermissions" :key="key">
        {{ permission }}
      </v-list-item>
    </v-list>
  </v-card>
</template>
