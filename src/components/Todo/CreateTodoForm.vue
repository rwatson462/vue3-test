<script setup>
  import {useTodoStore} from "../../stores/TodoStore.js";
  import {ref} from "vue";

  const todoStore = useTodoStore()

  const titleRef = ref('')
  const submitting = ref(false)

  async function createTodo() {
    submitting.value = true

    const todo = {
      title: titleRef.value
    }

    await todoStore.addTodo(todo)
    titleRef.value = ''

    submitting.value = false
  }
</script>

<template>
  <v-card title="Create a new Todo" subtitle="Plan to do something amazing">
    <form class="max-w-sm mx-auto flex flex-col p-4" @submit.prevent="createTodo()">
      <v-text-field label="Title" type="text" v-model="titleRef" />
      <v-btn text="Create new todo" variant="tonal" type="submit" :disabled="submitting" />
    </form>
  </v-card>
</template>
