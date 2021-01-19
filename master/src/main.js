import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import store from "./store/index"
import routers from "./route/index"
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';



createApp(App).use(routers).use(store).use(ElementPlus).mount('#app')
