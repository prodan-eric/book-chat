<script lang="ts" setup>
import { useBookChatStore } from '../../store'
import SearchBook from './SearchBook.vue';

const store = useBookChatStore()

const selectBookChat = (event: MouseEvent) => {
    store.setCurrentBookChat((event.target as HTMLElement).innerHTML)
}

</script>

<template>
  <div class="side-bar">
    <SearchBook/>
    <div class="side-bar-section"
     v-for="book in store.userBooks"
     @click="selectBookChat">
     {{book.title}}
    </div>
  </div>
</template>

<style src="../../assets/sideBarStyles.css"/>
