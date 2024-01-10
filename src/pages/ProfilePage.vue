<script setup>
import {supabaseClient} from "../helpers/supabaseClient.js";
import {ref} from "vue";

const supabase = supabaseClient()

const user = ref({})

supabase.auth.getUser()
    .then(({data}) => user.value = data.user)

</script>

<template>
  <pre>{{ JSON.stringify(user, undefined, 2) }}</pre>
</template>
