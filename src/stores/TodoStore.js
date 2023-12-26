import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {supabaseClient} from "../helpers/supabaseClient.js";

export const useTodoStore = defineStore(
    'todos',
    () => {
        const todos = ref(loadTodos())
        const todoCount = computed(() => todos.value.length)

        async function loadTodos() {
            const supabase = supabaseClient()

            const { data, error } = await supabase.from('todos').select()

            if (error) {
                console.log(error)
                throw new Error(error)
            }

            todos.value = data
        }

        async function addTodo(todo) {
            const supabase = supabaseClient()

            const { data, error } = await supabase.from('todos').insert({
                title: todo.title,
            })

            await loadTodos()
        }

        return {
            todos,
            todoCount,
            addTodo
        }
    }
)
