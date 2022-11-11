<script lang="ts" setup>
import { onMounted, ref, PropType } from 'vue'
import fetchUserBooks from '../firebase/fetch-functions/fetchUserBooks'
import { Book, User } from '../interfaces'
import SideBar from './SideBar/SideBar.vue'
import MessBoard from './MessBoard/MessBoard.vue'

const props =  defineProps({
    user: Object as PropType<User>
})
const userBooks = ref<Book[]>([])
const currentBookChat = ref('')

const selectBookChat = (event: MouseEvent) => {
    currentBookChat.value = (event.target as HTMLElement).innerHTML
}

onMounted(async ()=>{
    if(props.user) {
        userBooks.value = await fetchUserBooks(props.user.id)
        currentBookChat.value = props.user.currentBookChat
    }
})
</script>

<template>
    <div class="chat-app">
        <SideBar 
         :books="userBooks"
         @book-chat-select="selectBookChat"/>
        <MessBoard
        :user="user"
        :currentBookChat="currentBookChat"/>
    </div>  
</template>

<style>
.chat-app{
    display: flex;
}
</style>