<script setup>
  import {useTodoStore} from "../../stores/TodoStore.js";

  const todoStore = useTodoStore()
</script>

<template>
  <p>Showing {{ todoStore.todoCount }} todos</p>
  <v-list v-if="todoStore.todoCount > 0">
    <v-list-item v-for="(todo,idx) of todoStore.todos" :key="idx" :title="todo.title" />
  </v-list>
  <p v-else>You have nothing to do!</p>
</template>
