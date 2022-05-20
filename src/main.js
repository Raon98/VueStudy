import dayjs from 'dayjs'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';

const app  = createApp(App)
app.use(router)
app.mount('#app')
app.config.globalProperties.$dayjs = dayjs


