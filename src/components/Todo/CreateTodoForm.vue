<script setup>
  import {useTodoStore} from "../../stores/TodoStore.js";
  import {ref} from "vue";

  const { addTodo } = useTodoStore()

  const titleRef = ref('')

  function createAndAddTodo() {
    const todo = {
      title: titleRef.value
    }

    addTodo(todo)
    titleRef.value = ''
  }
</script>

<template>
  <v-card title="Create a new Todo" subtitle="Plan to do something amazing">
    <form class="max-w-sm mx-auto flex flex-col p-4" @submit.prevent="createAndAddTodo">
      <v-text-field label="Title" type="text" v-model="titleRef" />
      <v-btn text="Create new todo" variant="tonal" type="submit" />
    </form>
  </v-card>
</template>
