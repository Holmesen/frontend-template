import { createApp } from 'vue'
import './style.css'
import { Button } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(router).use(store).use(Button)

app.mount('#app')
