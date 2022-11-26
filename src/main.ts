import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LoginUser from './components/LoginUser.vue'
import RegisterUser from './components/RegisterUser.vue'
import ChatApp from './components/ChatApp.vue'
import EditUserProfile from './components/User/EditUser/EditUserProfile.vue'

const routes = [
    { path: '/', component: LoginUser },
    { path: '/register', component: RegisterUser },
    { path: '/chat', component: ChatApp},
    { path: '/edit-user-profile', component: EditUserProfile}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


createApp(App)
   .use(createPinia())
   .use(router)
   .mount('#app')
