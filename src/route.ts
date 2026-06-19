import {createRouter, createWebHistory} from 'vue-router'
import Profile from './pages/Profile.vue'
import Education from './pages/Education.vue'
import Dashboard from './pages/Dashboard.vue'
import Work from './pages/Work.vue'


const routes =[
    {path: '/', component: Dashboard},
    {path: '/profile', component: Profile},
    {path: '/education', component: Education},
    {path: '/work', component: Work},
]

export const router = createRouter({
    linkActiveClass: '',
    history: createWebHistory(),
    routes
})
