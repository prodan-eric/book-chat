<script lang="ts" setup>
import { useBookChatStore } from '../../../store'
import EditUserSidebar from './EditUserSidebar.vue'
import setCurrentTheme from '../../../firebase/set-functions/setCurrentTheme'

const store = useBookChatStore()

const switchTheme = () => {

  if(document.documentElement.getAttribute('theme')!=='dark') {
      setCurrentTheme('dark')
      store.setUserCurrentTheme('dark')
  } else {
      setCurrentTheme('light')
      store.setUserCurrentTheme('light')
  }
}

</script>

<template>
    <div class="editor" v-if="store.isLoggedIn">
        <EditUserSidebar/>
        <div class="options">
            <button @click="switchTheme">
                Switch theme
            </button>
        </div>
    </div>
    <div class="link-wrapper" v-else>
        <router-link class="link" to="/">Sign In First</router-link>
    </div> 
</template>

<style scoped>
.options{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.editor{
    display: flex;
    justify-content: space-evenly;
}

button {
    border-radius: 5px;
    background-color: var(--background-fill-color-lighter);
    cursor: pointer;
}

</style>