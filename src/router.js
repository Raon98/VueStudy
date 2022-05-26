// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/printer'), // 동적 import
    },
    {
        path: '/Save',
        name: 'Save',
        component: () => import('@/views/SaveModal'), // 동적 import
    },
    {
        path: '/Confirm',
        name: 'Confirm',
        component: () => import('@/views/confirm'), // 동적 import
    },
    {
        path: '/watch',
        name: 'Watch',
        component: () => import('@/views/watchEffect'), // 동적 import
    },
    {
        path: '/audio',
        name: 'Audio',
        component: () => import('@/views/Audio'), // 동적 import
    },
    {
        path: '/composable',
        name: 'Composable',
        component: () => import('@/views/composable'), // 동적 import
    },
    {
        path: '/computedEx',
        name: 'computedEx',
        component: () => import('@/views/computedEx'), // 동적 import
    },
    {
        path: '/Composition',
        name: 'Composition',
        component: () => import('@/views/Composition'), // 동적 import
    },
    {
        path: '/store',
        name: 'store',
        component: () => import('@/views/store'), // 동적 import
    },
    {
        path: '/compositionEx',
        name: 'compositionEx',
        component: () => import('@/views/compositionEx'), // 동적 import
    },
    {
        path: '/refEx',
        name: 'refEx',
        component: () => import('@/views/refEx'), // 동적 import
    },
];

// 이렇게 해도 된다.
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
// export default router;

export const router = createRouter({
    history: createWebHistory(),
    routes,
});