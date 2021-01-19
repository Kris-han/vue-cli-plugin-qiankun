import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/list.vue'
console.log(Home);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
