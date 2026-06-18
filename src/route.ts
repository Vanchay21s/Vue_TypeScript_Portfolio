import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import Profile from './pages/Profile.vue'
import Education from './pages/Education.vue'
import Dashboard from './pages/Dashboard.vue'


const routes =[
    {path: '/', component: Dashboard},
    {path: '/profile', component: Profile},
    {path: '/education', component: Education},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
