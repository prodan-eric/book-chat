<script lang="ts" setup>
import { PropType } from 'vue';
import { Book } from '../../interfaces';
  const props = defineProps({
    books:  Array as PropType<Book[]>
  })
</script>

<template>
  <div class="side-bar">
    <div class="book-section"
     v-for="book in books"
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
