import HomePage from "../pages/HomePage.vue";
import ConverterPage from "../pages/ConverterPage.vue";
import TodoPage from "../pages/TodoPage.vue";

export const routes = [
    { path:'/', component: HomePage, name: 'home' },
    { path: '/converter', component: ConverterPage, name: 'converter' },
    { path: '/todo', component: TodoPage, name: 'todo' }
]
