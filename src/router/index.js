import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory

import Board from '../components/Board.vue'
import ListRoom from '../components/ListRoom.vue'
import Home from '../components/Home.vue'

const routes = [
    {path: '/board', component: Board},
    {path: '/room', component: ListRoom},
    {path: '/home', component: Home}
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router