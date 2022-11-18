<script lang="ts" setup>
import { ref } from 'vue';

const username = ref()
const password = ref()

const attemptLogin = () =>{
   
}

</script>

<template>
  <form @submit.prevent="attemptLogin">
     <input placeholder="Username" v-model="username"/>
     <input placeholder="Password" v-model="password"/>
  </form>
</template>