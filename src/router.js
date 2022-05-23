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