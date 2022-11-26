<script lang="ts" setup>
import { useBookChatStore } from '../../store'

const store = useBookChatStore()

const selectBookChat = (event: MouseEvent) => {
    store.setCurrentBookChat((event.target as HTMLElement).innerHTML)
}

</script>

<template>
  <div class="side-bar">
    <div class="search-book">
      <input type="text" placeholder="Find book..."/>
    </div>

    <div class="side-bar-section"
     v-for="book in store.userBooks"
     @click="selectBookChat">
     {{book.title}}
    </div>
  </div>
</template>

<style src="../../assets/sideBarStyles.css"/>
