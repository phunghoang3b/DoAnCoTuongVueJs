import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory

import Board from '../components/Board.vue'
import ListRoom from '../components/ListRoom.vue'
import Home from '../components/Home.vue'
import Chat from '../components/Chat.vue'

const routes = [
    {path: '/board', component: Board},
    {path: '/room', component: ListRoom},
    {path: '/home', component: Home},
    {path: '/chat', component: Chat},
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router