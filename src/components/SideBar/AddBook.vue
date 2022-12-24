<script setup lang="ts">
import { ref } from 'vue'
import { BookForm } from '../../interfaces'
import addBook from '../../firebase/create-functions/addBook'

const form = ref<BookForm>({
    author: '',
    title: '',
    language: '',
    isbn: ''
})

const submitForm = () => addBook(form.value)
</script>

<template>
  <div class="book-form">
    <h3>Create a new book chat</h3>
    <form @submit.prevent="submitForm">
    <label for="author">Author:</label>
    <input type="text" v-model="form.author" id="author" required>
    <label for="title">Title:</label>
    <input type="text" v-model="form.title" id="title" required>
    <label for="language">Language:</label>
    <input type="text" v-model="form.language" id="language" required>
    <label for="isbn">ISBN:</label>
    <input type="text" v-model="form.isbn" id="isbn" required>
    
    <button type="submit">Add Chat</button> 
    <button @click="$emit('close')" style="margin-top:15px">Cancel</button>
  </form>
  </div>
</template>

<style>
.book-form {
    margin: 0px 30px;
}
</style>