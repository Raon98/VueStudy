import {createWebHashHistory, createRouter} from "vue-router";
import Main from '../views/printer'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router