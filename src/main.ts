import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LoginUser from './components/LoginUser.vue'
import RegisterUser from './components/RegisterUser.vue'
import ChatApp from './components/ChatApp.vue'

const routes = [
    { path: '/', component: LoginUser },
    { path: '/register', component: RegisterUser },
    { path: '/chat', component: ChatApp}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


createApp(App)
   .use(createPinia())
   .use(router)
   .mount('#app')
