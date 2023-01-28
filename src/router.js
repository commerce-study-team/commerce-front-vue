// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'App',
        component: () => import('@/App'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About'),
    },
    {
        path: '/order',
        name: 'OrderSheet',
        component: () => import('@/views/OrderSheet'),
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});