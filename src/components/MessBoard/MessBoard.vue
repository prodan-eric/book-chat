<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useBookChatStore } from '../../store'
import { getFormattedDate } from '../../utils'
import { Timestamp } from '@firebase/firestore'
import fetchUserBooks from '../../firebase/fetch-functions/fetchUserBooks'
import fetchMessages from '../../firebase/fetch-functions/fetchMessages'
import postMessage from '../../firebase/create-functions/postMessage'
import onMessageAdded from '../../firebase/listener-functions/onMessageAdded'

let unsubscribe: Function

const store = useBookChatStore()
const messagesEl = ref<HTMLElement>()

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

</script>

<template>
    <div class="message-board">
        <div class="board-top-bar">
          {{store.currentBookChat}}
        </div>
        <div class="messages" ref="messagesEl">
          <!-- this is one message -->
           <div class="message" v-for="message in store.messages">
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
</template>

<style>
.board-top-bar{
    text-align: center;
    font-family: monospace;
    outline: solid black 1px;
    border-radius: 3px;
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
    height: 400px;
    overflow: auto;
}
.messsage{
    border-radius: 5px;
}
.message:hover{
  background-color: lightgray;
}

.message-board{
   height: 500px; 
   width: 100%;
   position: relative;
   display: grid;
   justify-content: center;
}

.typing-box{
    bottom: 10px;
}

.typing-box input{
    height: 40px;
}

.message-input{
    width: 450px;
    border-radius: 10px;
}
</style>