<script lang="ts" setup>
import { ref } from 'vue'
import createUser from '../firebase/auth-functions/createUser'

const username = ref()
const password = ref()
const email = ref()

const error = ref()
const registered = ref(false)

const attemptRegister = async () =>{
  error.value = await createUser(email.value, username.value, password.value)
  if(error.value==undefined) {
    error.value = ''
    registered.value = true
  } 
}
</script>

<template>
  <div class="login-container">
    <h3>Create Your Account</h3>
    <form @submit.prevent="attemptRegister">
     <input placeholder="E-Mail" v-model="email"/>
     <input placeholder="Username" v-model="username"/>
     <input type="password" placeholder="Password" v-model="password"/>
     <input type="submit" value="Register"/>
     <p v-if="error" style="color:red">{{error}}</p>
     <p v-else-if="registered">Account registered, you can sign in now.</p>
    </form>
    <h3>Or</h3>
    <router-link to="/" class="link">Sign In</router-link>
  </div>
</template>

<style>
@import '../assets/formStyles.css';
</style>