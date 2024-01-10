import HomePage from "../pages/HomePage.vue";
import ConverterPage from "../pages/ConverterPage.vue";
import TodoPage from "../pages/TodoPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import ProfilePage from "../pages/ProfilePage.vue";

export const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/converter', component: ConverterPage, name: 'converter' },
    { path: '/todo', component: TodoPage, name: 'todo', meta: {requiresAuth: true} },
    { path: '/register', component: RegisterPage, name: 'register', meta: {noAuth: true} },
    { path: '/login', component: LoginPage, name: 'login', meta: {noAuth: true} },
    { path: '/profile', component: ProfilePage, name: 'profile', meta: {requiresAuth: true} },
]
