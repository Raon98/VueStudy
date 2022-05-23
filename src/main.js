import dayjs from 'dayjs'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import Vuex from "vuex";

const app  = createApp(App)
app.use(Vuex)
app.use(router)
app.mount('#app')
app.config.globalProperties.$dayjs = dayjs


