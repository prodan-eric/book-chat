<script lang="ts" setup>
import { useBookChatStore } from '../../store';
const store = useBookChatStore()
</script>

<template>
     <div class="user-panel side-menu">
       <img :src="store.currentPfp"/>
       <p>Logged In as:</p>
       <p>{{store.user.username}}</p>
       <router-link class="link" to="edit-user-profile">Edit Profile</router-link>
       <router-link class="link log-out" to="/" @click="store.logOut">Log Out</router-link>
     </div>
</template>

<style scoped>
@import '../../assets/generalStyles.css';
.user-panel{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.link{
  text-decoration: none;
  color: var(--text-color);
  outline: 2px solid gray;
  border-radius: 3px;
  padding: 5px;
}
.link:hover{
  background-color: lightgray;
}

.log-out{
  margin-top: 10px;
}

img{
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

p{
  margin: 5px 0px;
}
</style>