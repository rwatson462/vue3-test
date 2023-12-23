import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useTodoStore = defineStore(
    'todos',
    () => {
        const todos = ref([])
        const todoCount = computed(() => todos.value.length)

        function addTodo(todo) {
            todos.value.push(todo)
        }

        return {
            todos,
            todoCount,
            addTodo
        }
    }
)
