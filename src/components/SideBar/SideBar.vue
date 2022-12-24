<script lang="ts" setup>
import { ref } from 'vue';
import { useBookChatStore } from '../../store'
import SearchBook from './SearchBook.vue';
import AddBook from './AddBook.vue'

const store = useBookChatStore()
const dialogRef = ref<HTMLDialogElement>()

const selectBookChat = (event: MouseEvent) => {
    store.setCurrentBookChat((event.target as HTMLElement).innerHTML)
}

const openDialog = () => dialogRef.value?.showModal()

const closeDialog = () => dialogRef.value?.close()

</script>

<template>
  <div class="side-bar side-menu">
    <SearchBook/>
    <div class="side-bar-section book-section"
     v-for="book in store.userBooks"
     @click="selectBookChat">
     {{book.title}} 
    </div>
    <div 
      class="side-bar-section add-book"
      @click="openDialog"
      >
      <img class="plus-img" src="plus.svg">
      New Chat
    </div>
  </div>
  <dialog ref="dialogRef">
   <AddBook
   @close="closeDialog"/>
  </dialog>
</template>

<style>
@import '../../assets/sideBarStyles.css';
.plus-img{
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.book-section{
  display: flex;
  justify-content: space-between;
}

.add-book{
  display: flex;
  align-items: center;
}
</style>
