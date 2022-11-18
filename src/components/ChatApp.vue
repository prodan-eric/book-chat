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
    <div class="link-wrapper" v-else>
        <router-link class="link" to="/">Sign In First</router-link>
    </div> 
</template>

<style scoped>
.chat-app{
    display: flex;
}

.link-wrapper{
    display: flex;
    justify-content: center;
}

</style>