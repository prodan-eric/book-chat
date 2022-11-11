<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import fetchUserBooks from '../firebase/fetch-functions/fetchUserBooks'
import { Book } from '../interfaces'
import SideBar from './SideBar/SideBar.vue'
import MessBoard from './MessBoard/MessBoard.vue'
import { useBookChatStore } from '../store'

const store = useBookChatStore()
const userBooks = ref<Book[]>([])

const selectBookChat = (event: MouseEvent) => {
    store.setCurrentBookChat((event.target as HTMLElement).innerHTML)
}

onMounted(async ()=>{
    if(store.user) {
        userBooks.value = await fetchUserBooks(store.user.id)
        store.setCurrentBookChat(store.user.currentBookChat)
    }
})
</script>

<template>
    <div class="chat-app">
        <SideBar 
         :books="userBooks"
         @book-chat-select="selectBookChat"/>
        <MessBoard/>
    </div>  
</template>

<style>
.chat-app{
    display: flex;
}
</style>