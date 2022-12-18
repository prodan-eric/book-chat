<script lang="ts" setup>
import { ref } from 'vue'
import loginUser from '../firebase/auth-functions/loginUser'
import fetchUserData from '../firebase/fetch-functions/fetchUserData'
import { useRouter } from 'vue-router'

const email = ref()
const password = ref()
const router = useRouter()

const attemptLogin = async () =>{
  await loginUser(email.value, password.value)
  await fetchUserData()
  router.push({ path: '/chat' })
}
</script>

<template>
  <div class="login-container">
    <h2>Welcome to BookChat</h2>
     <h3>Log In</h3>
    <form @submit.prevent="attemptLogin">
     <input placeholder="E-Mail" v-model="email"/>
     <input type="password" placeholder="Password" v-model="password"/>
     <input type="submit" value="Log In"/>
    </form>
    <h3>Or</h3>
    <router-link to="/register" class="link">Create an Account</router-link>
    <img class="book-img" src='open_book.svg'/>
  </div>
</template>

<style>
@import '../assets/formStyles.css';
h2, h3{
  font-family: Arial, Helvetica, sans-serif;
}

.book-img{
  margin-left: 40px;
  margin-top: 200px;
  width: 500px;
  height: 200px;
}
</style>