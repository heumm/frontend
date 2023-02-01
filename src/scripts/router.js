import HomeView from "@/pages/HomeView";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "login" */ '@/pages/LoginView')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;