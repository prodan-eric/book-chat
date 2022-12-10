<script lang="ts" setup>
import SideBar from './SideBar/SideBar.vue'
import MessBoard from './MessBoard/MessBoard.vue'
import UserPanel from './User/UserPanel.vue'
import { useBookChatStore } from '../store'
const store = useBookChatStore()
</script>

<template>
    <div class="chat-app" v-if="store.isLoggedIn">
        <div class="left-side">
            <SideBar/>
            <MessBoard/>
        </div>
        <UserPanel/>
    </div> 
    <div class="link-wrapper" v-else>
        <router-link class="link" to="/">Sign In First</router-link>
    </div> 
</template>

<style scoped>
.chat-app{
    display: flex;
    justify-content: space-between;
}

.left-side{
    display: flex;
    flex-grow: 1;
}

.link-wrapper{
    display: flex;
    justify-content: center;
}

</style>