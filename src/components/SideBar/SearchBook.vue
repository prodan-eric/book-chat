<script lang="ts" setup>
import { ref, watch } from 'vue'
import fetchBooks from '../../firebase/fetch-functions/fetchBooks'

const searchBook = ref<string>('')
const searchBooks = ref<string[]>([])

watch(searchBook, async (value)=>{
    if(value.length>2){ 
        searchBooks.value = await fetchBooks(value)
    } else {
        searchBooks.value = []
    }
})
</script>

<template>
    <div class="search-book">
      <input v-model="searchBook" placeholder="Find book..."/>
    </div>
    <div class="searched-books" v-if="searchBook">
      <span v-if="searchBooks.length">Books Found:</span>
      <span v-else>Looking for books...</span>
       <div class="searched-book" v-if="searchBooks" v-for="book in searchBooks">
          {{book}}
       </div>
    </div>
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
}

span{
    font-size: 12px;
}
</style>