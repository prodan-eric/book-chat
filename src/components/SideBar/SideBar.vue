<script lang="ts" setup>
import { useBookChatStore } from '../../store'

const store = useBookChatStore()

</script>

<template>
  <div class="side-bar">
    <div class="book-section"
     v-for="book in store.userBooks"
     @click="$emit('book-chat-select', $event)">
     {{book.title}}
    </div>
  </div>
</template>

<style>
.book-section{
   padding: 20px 5px;
   width: 120px;
}
.book-section:hover{
    background-color: lightblue;
    cursor: pointer;
}
.side-bar{
    border-radius: 5px;
    border-color: black;
    border-width: 0px;
}
</style>
