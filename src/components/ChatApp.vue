<script lang="ts" setup>
import SideBar from './SideBar/SideBar.vue'
import MessBoard from './MessBoard/MessBoard.vue'
import { useBookChatStore } from '../store'
import { ref } from 'vue';

const store = useBookChatStore()

const loginUsername = ref('')
const isLoggedIn = ref(false)
const login = () =>{
   store.user.username = loginUsername.value
   isLoggedIn.value = true
}

const selectBookChat = (event: MouseEvent) => {
    store.setCurrentBookChat((event.target as HTMLElement).innerHTML)
}

</script>

<template>
    <form class="login" @submit.prevent="login" v-if="!isLoggedIn">
        <input placeholder="username" v-model="loginUsername"/>
    </form>
    <div class="chat-app" v-if="isLoggedIn">
        <SideBar @book-chat-select="selectBookChat"/>
        <MessBoard/>
    </div>  
</template>

<style>
.chat-app{
    display: flex;
}
</style>