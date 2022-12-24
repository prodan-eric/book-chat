<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useBookChatStore } from '../../store'
import { getFormattedDate } from '../../utils'
import { Timestamp } from '@firebase/firestore'
import fetchUserBooks from '../../firebase/fetch-functions/fetchUserBooks'
import fetchMessages from '../../firebase/fetch-functions/fetchMessages'
import postMessage from '../../firebase/create-functions/postMessage'
import setCurrentBookChat from '../../firebase/set-functions/setCurrentBookChat'
import onMessageAdded from '../../firebase/listener-functions/onMessageAdded'
import removeUserBook from '../../firebase/remove-functions/removeUserBook'

let unsubscribe: Function

const store = useBookChatStore()
const messagesEl = ref<HTMLElement>()
const dialogRef = ref<HTMLDialogElement>()

const scrollToBottom = () => messagesEl.value!.scrollTop = messagesEl.value!.scrollHeight


onMounted(async ()=>{
    if(store.user) {
        store.userBooks = await fetchUserBooks()
        store.setCurrentBookChat(store.user.currentBookChat)
        console.log(store.user.username)
    }
    unsubscribe =  await onMessageAdded()
})

watch(()=>store.currentBookChat, async ()=>{    
   if(unsubscribe) unsubscribe()
   store.messages = await fetchMessages()
   setCurrentBookChat()
   scrollToBottom()
})

const addMesssage = () => {
   postMessage(store.currentMessage)
   store.messages.push({
        text: store.currentMessage,
        sentAt: Timestamp.now(),
        sentBy: store.user.username
    })
    store.setCurrentMessage('')
}

const handleScroll = () => {
   if(messagesEl.value?.scrollTop===0){
    console.log('loading new messages...');
   }
}
const closeDialog = () => dialogRef.value?.close()
const openDialog = () => dialogRef.value?.showModal()

const leaveChat = () => {
    removeUserBook()
    closeDialog()  
}


</script>

<template>
    <div class="message-board" v-if="store.currentBookChat">
        <div class="board-top-bar">
          <p></p>
          {{store.currentBookChat}}
          <img @click="openDialog" class="delete-img" src="delete.svg"/>
        </div>
        <div class="messages" ref="messagesEl" @scroll="handleScroll">
          <!-- this is one message -->
           <div class="message" v-for="message in store.messages" style="padding-left:20px">
            <div class="top-bar">
                 <p class="sent-by">{{message.sentBy}}</p>
                 <p class="sent-at">{{getFormattedDate(message.sentAt)}}</p>
            </div>
            <div class="content">
                <p>{{message.text}}</p>
            </div>
           </div> 
           <!-- this is one message -->
        </div>
        <form class="typing-box" @submit.prevent="addMesssage">
          <input class="message-input" 
                 v-model="store.currentMessage"
                 :placeholder="`type something, ${store.user.username}`"/>
        </form>
    </div>
    <div class="messages-placeholder message-board" v-else>
         <p style="text-align: center">Join a book chat...</p>
    </div>

    <dialog ref="dialogRef">
        <p>Do you want to leave the "{{store.currentBookChat}}" chat?</p>
        <div style="display: flex; justify-content:space-between">
            <button @click="closeDialog">No</button>
            <button @click="leaveChat">Yes</button>
        </div>
    </dialog>
</template>

<style>
.board-top-bar{
    text-align: center;
    font-family: monospace;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sent-by{
    font-size: 18px;
}

.sent-at{
    margin-right: 10px;
}

.top-bar{
    display: flex;
    justify-content: space-between;
    font-size: 15px;
}
.content{
    font-size: 15px;
}

.content p{
    margin: 0;
    padding: 5px 0px;
}

.messages{
    margin-top: 10px;
    flex-grow: 0.8;
    overflow: auto;
}
.messsage{
    padding-left: 10px;
}
.message:hover{
  background-color: var(--background-fill-color-darker);
  color: var(--text-color-reverse);
}

.message-board{
   height: 95vh; 
   flex-grow: 1;
   margin: 0px 30px;
   outline: 1px solid gray;
   border-radius: 5px;
   padding: 5px 0px 2px;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
}

.typing-box{
    margin-top: 20px;
    bottom: 10px;
}

.typing-box input{
    height: 40px;
    background-color: var(--message-input-color);
}

.message-input{
    padding: 0px 10px 0px;
    width: 450px;
    border-radius: 10px;
}

.delete-img{
  width: 10px;
  height: 10px;
  margin: 0px 20px;
}


::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: lightgray;
  border-radius: 10px;
}
</style>