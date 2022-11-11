<script lang="ts" setup>
import {PropType} from 'vue';
import {User} from '../../interfaces'
const props = defineProps({
    user: Object as PropType<User>
})
</script>

<template>
    <div class="message-board">
        <div class="messages">
           <div class="message">
            <div class="top-bar">
                 <p>ieronim</p>
                 <p>14:25</p>
            </div>
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et harum nulla.</p>
            </div>
           </div> 
        </div>
        <div class="typing-box">
          <input class="message-input" :placeholder="`type something, ${user?.username}`"/>
        </div>
    </div>
</template>

<style>

.top-bar{
    display: flex;
    justify-content: space-between;
    font-size: 15px;
}
.content{
    font-size: 18px;
}

.content p{
    margin: 0;
    padding: 5px 0px;
}

.message-board{
   height: 500px; 
   width: 500px;
   position: relative;
   margin: auto;
}

.typing-box{
    position: absolute;
    bottom: 10px;
}

.message-input{
    width: 450px;
    border-radius: 10px;
}
</style>