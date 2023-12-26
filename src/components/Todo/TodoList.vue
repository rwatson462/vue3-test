<script setup>
  import {useTodoStore} from "../../stores/TodoStore.js";

  const todoStore = useTodoStore()
</script>

<template>
  <p>Showing {{ todoStore.todoCount }} todos</p>
  <v-list v-if="todoStore.todoCount > 0" class="bg-transparent">
    <v-list-item v-for="(todo,idx) of todoStore.todos" :key="idx" :title="todo.title" class="rounded my-2 bg-grey-darken-4" />
  </v-list>
  <p v-else>You have nothing to do!</p>
</template>
