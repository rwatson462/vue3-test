<script setup>

import TodoList from "../components/Todo/TodoList.vue";
import CreateTodoForm from "../components/Todo/CreateTodoForm.vue";
</script>

<template>
  <section class="flex flex-col space-y-4 py-4">
    <p>Always a classic, here's a basic todo list.  Just don't refresh the page because it's not persistent!</p>
    <CreateTodoForm />
    <TodoList />
  </section>
</template>
