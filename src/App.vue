<script setup lang="ts">
import { ref } from 'vue'
import ChatApp from './components/ChatApp.vue'
import { User } from './interfaces'

const user = ref<User>({
    id: 'F1R9tkmgDaS5xxydpYG4',
    username: 'ieronim',
    password: '123',
    currentBookChat: 'Ulysses'
})

</script>

<template>
 <ChatApp :user="user"/>
</template>

<style scoped>
</style>
