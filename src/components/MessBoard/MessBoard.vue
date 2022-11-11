<script lang="ts" setup>
import { useBookChatStore } from '../../store'
const store = useBookChatStore()
</script>

<template>
    <div class="message-board">
        <div class="board-top-bar">
          {{store.currentBookChat}}
        </div>
        <div class="messages">
          <!-- this is one message -->
           <div class="message" v-for="a in 10">
            <div class="top-bar">
                 <p class="sent-by">ieronim</p>
                 <p class="sent-at">14:25</p>
            </div>
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, saepe, mollitia exercitationem optio natus error itaque, iusto ut quibusdam nam iure officia doloribus culpa. Mollitia quisquam minima recusandae aperiam facere.</p>
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