<script lang="ts" setup>
import { useBookChatStore } from '../../store'
import { ref, watch } from 'vue'
import fetchMessages from '../../firebase/fetch-functions/fetchMessages'
import { Message } from '../../interfaces';

const store = useBookChatStore()

const messages  = ref<Message[]>([])

watch(()=>store.currentBookChat, async ()=>{
   messages.value = await fetchMessages()
})

</script>

<template>
    <div class="message-board">
        <div class="board-top-bar">
          {{store.currentBookChat}}
        </div>
        <div class="messages">
          <!-- this is one message -->
           <div class="message" v-for="message in messages">
            <div class="top-bar">
                 <p class="sent-by">{{message.sentBy}}</p>
                 <p class="sent-at">{{message.sentAt}}</p>
            </div>
            <div class="content">
                <p>{{message.text}}</p>
            </div>
           </div> 
           <!-- this is one message -->
        </div>
        <div class="typing-box">
          <input class="message-input" :placeholder="`type something, ${store.user.username}`"/>
        </div>
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

.message-input{
    width: 450px;
    border-radius: 10px;
}
</style>