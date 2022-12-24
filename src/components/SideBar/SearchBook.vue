<script lang="ts" setup>
import { ref, watch } from 'vue'
import fetchBooks from '../../firebase/fetch-functions/fetchBooks'
import fetchBook from '../../firebase/fetch-functions/fetchBook'
import addUserBook from '../../firebase/create-functions/addUserBook'

const searchBook = ref<string>('')
const searchBooks = ref<string[]>([])
const selectedBook = ref<string>('')
const dialogRef = ref<HTMLDialogElement>()

watch(searchBook, async (value)=>{
    if(value.length<2){ 
        searchBooks.value = [] 
        return 
    } 
    searchBooks.value = await fetchBooks(value)
})

const addNewBook = async (book: string) => {
  const dbBook = await fetchBook(book)
  dialogRef.value?.close()
  await addUserBook(dbBook)   
  searchBook.value = ''
  window.location.reload()
}

const openDialog = (book: string) => {
   selectedBook.value = book
   dialogRef.value?.showModal()
}
const closeDialog = () => dialogRef.value?.close()
</script>

<template>
    <div class="search-book">
      <input style="width: 10vw" v-model="searchBook" placeholder="Find book..."/>
    </div>
    <div class="searched-books" v-if="searchBook">
      <span v-if="searchBooks.length">Books Found:</span>
      <span v-else>Looking for books...</span>
       <div class="searched-book" 
             v-if="searchBooks" 
             v-for="book in searchBooks"
             @click="openDialog(book)">
          {{book}}
       </div>
    </div>
    <dialog ref="dialogRef">
        <p>Would you like to join the "{{selectedBook}}" chat?</p>
        <div style="display: flex; justify-content:space-between">
            <button @click="closeDialog">No</button>
            <button @click="addNewBook(selectedBook)">Yes</button>
        </div>
    </dialog>
</template>

<style>
.searched-books{
  border-radius: 2px;
  outline: 1px solid gray;
  padding: 5px;
  max-height: 300px;
  overflow: hidden;
}
.searched-book{
    font-family: monospace;
    margin-top: 5px;
    cursor: pointer;
    outline: 1px solid gray;
    padding: 5px;
}
.searched-book:hover{
  background-color: lightblue;
}


dialog {
    transform: translate(-50%, -50%);
    border-radius: 10px;
}

dialog button {
    padding: 0px 15px;
}

span{
    font-size: 12px;
}
</style>