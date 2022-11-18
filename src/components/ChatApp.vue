<script lang="ts" setup>
import SideBar from './SideBar/SideBar.vue'
import MessBoard from './MessBoard/MessBoard.vue'
import { useBookChatStore } from '../store'
const store = useBookChatStore()
</script>

<template>
    <div class="chat-app" v-if="store.isLoggedIn">
        <SideBar/>
        <MessBoard/>
    </div> 
    <div v-else>
        <router-link to="/">Sign In First</router-link>
    </div> 
</template>

<style>
.chat-app{
    display: flex;
}
</style>