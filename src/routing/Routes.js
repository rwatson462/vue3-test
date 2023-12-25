import HomePage from "../pages/HomePage.vue";
import ConverterPage from "../pages/ConverterPage.vue";
import TodoPage from "../pages/TodoPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import LoginPage from "../pages/LoginPage.vue";

export const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/converter', component: ConverterPage, name: 'converter' },
    { path: '/todo', component: TodoPage, name: 'todo', meta: {requiresAuth: true} },
    { path: '/register', component: RegisterPage, name: 'register' },
    { path: '/login', component: LoginPage, name: 'login' },
]
