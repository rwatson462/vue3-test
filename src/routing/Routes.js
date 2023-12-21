import HomePage from "../pages/HomePage.vue";
import ConverterPage from "../pages/ConverterPage.vue";
import TodoPage from "../pages/TodoPage.vue";

export const routes = [
    { path:'/', component: HomePage },
    { path: '/converter', component: ConverterPage },
    { path: '/todo', component: TodoPage }
]
