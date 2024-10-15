import { createRouter, createWebHistory } from "vue-router";
import Users from "./components/Users.vue";
import Login from "./pages/Login.vue";
import Home from "./layouts/Main.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'users',
                    name: 'users',
                    component: Users
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})