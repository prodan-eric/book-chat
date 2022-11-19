<script lang="ts" setup>
import { ref } from 'vue';
import loginUser from '../firebase/auth-functions/loginUser'
import fetchUsername from '../firebase/fetch-functions/fetchUsername';
import { useRouter } from 'vue-router';

const email = ref()
const password = ref()
const router = useRouter()

const attemptLogin = async () =>{
  await loginUser(email.value, password.value)
  await fetchUsername()
  router.push({ path: '/chat' })
}
</script>

<template>
  <form @submit.prevent="attemptLogin">
     <input placeholder="E-Mail" v-model="email"/>
     <input placeholder="Password" v-model="password"/>
     <input type="submit" value="Log In"/>
     <router-link to="/register" class="link">Create Account</router-link>
  </form>
</template>

<style>
@import '../assets/formStyles.css';
</style>