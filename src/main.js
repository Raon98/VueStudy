import dayjs from 'dayjs'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import  store  from "./store";
import axios from "axios"
import VueNumber from "vue-number-animation";

axios.defaults.baseURL = 'http://localhost:8888'

const app  = createApp(App)
app.config.productionTip =false

app.config.globalProperties.axios = axios
app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.$store = store
app.config.globalProperties.foo = "bar";


app.use(router).use(store).use(VueNumber)
app.mount('#app')



