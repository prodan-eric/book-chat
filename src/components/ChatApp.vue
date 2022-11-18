<script lang="ts" setup>
import SideBar from './SideBar/SideBar.vue'
import MessBoard from './MessBoard/MessBoard.vue'
import LoginUser from './LoginUser.vue'
import RegisterUser from './RegisterUser.vue';
import { useBookChatStore } from '../store'
const store = useBookChatStore()
</script>

<template>
    <div class="authentication" v-if="!store.isLoggedIn">
     <LoginUser/>
     <RegisterUser/>
    </div>
    <div class="chat-app" v-if="store.isLoggedIn">
        <SideBar/>
        <MessBoard/>
    </div>  
</template>

<style>
.chat-app{
    display: flex;
}
</style>