<script lang="ts" setup>
import { ref } from 'vue'
import createUser from '../firebase/auth-functions/createUser'

const username = ref()
const password = ref()
const email = ref()

const attemptRegister = () =>{
  createUser(email.value, username.value, password.value)
}
</script>

<template>
  <form @submit.prevent="attemptRegister">
     <input placeholder="E-Mail" v-model="email"/>
     <input placeholder="Username" v-model="username"/>
     <input placeholder="Password" v-model="password"/>
     <input type="submit" value="Submit"/>
  </form>
</template>