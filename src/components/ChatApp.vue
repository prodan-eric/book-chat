<script lang="ts" setup>
import { onMounted } from 'vue'
import fetchUserBooks from '../firebase/fetch-functions/fetchUserBooks'
import SideBar from './SideBar/SideBar.vue'
import MessBoard from './MessBoard/MessBoard.vue'
import { useBookChatStore } from '../store'

const store = useBookChatStore()

const selectBookChat = (event: MouseEvent) => {
    store.setCurrentBookChat((event.target as HTMLElement).innerHTML)
}

onMounted(async ()=>{
    if(store.user) {
        store.userBooks = await fetchUserBooks()
        store.setCurrentBookChat(store.user.currentBookChat)
    }
})
</script>

<template>
    <div class="chat-app">
        <SideBar 
         @book-chat-select="selectBookChat"/>
        <MessBoard/>
    </div>  
</template>

<style>
.chat-app{
    display: flex;
}
</style>