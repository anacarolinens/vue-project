import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Equipe from "../pages/Equipe.vue";

const lazyLoad = (view) => import ('../pages/${view}.vue');


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }, 
    {
        path: '/equipe',
        name: 'Equipe',
        component: lazyLoad('Equipe'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;