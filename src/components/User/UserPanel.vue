<script lang="ts" setup>
import { useBookChatStore } from '../../store';
const store = useBookChatStore()
</script>

<template>
     <div class="user-panel">
       <img :src="store.currentPfp"/>
       <p>Logged In as:</p>
       <p>{{store.user.username}}</p>
       <router-link class="link" to="edit-user-profile">Edit Profile</router-link>
     </div>
</template>

<style scoped>
.user-panel{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.link{
  text-decoration: none;
  color: black;
  outline: 2px solid gray;
  border-radius: 3px;
  padding: 5px;
}
.link:hover{
  background-color: lightgray;
}

img{
  height: 100px;
  width: 100px;
}

p{
  margin: 5px 0px;
}
</style>