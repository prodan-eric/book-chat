<script lang="ts" setup>
import { ref } from 'vue';
import { useBookChatStore } from '../../../store';
import EditUserSidebar from './EditUserSidebar.vue'
import uploadPfp from '../../../firebase/storage-functions/uploadPfp'

const store = useBookChatStore()
const image = ref(null)

const handleFileChange = (event: Event) => {
  //@ts-ignore
  image.value = (event.target as HTMLInputElement).files[0]
}

const handleUpload = async () => {
  if(image.value && store.firebaseUserObj){
    await uploadPfp(image.value, store.firebaseUserObj)
  }
}

</script>

<template>
    <div class="editor" v-if="store.isLoggedIn">
        <EditUserSidebar/>
        <div class="options">
            <h3>Update Your Profile</h3>
            <div class='update-username'>
               <input placeholder='New Username' type='text'>
               <button>Update</button>
            </div>

            <div class='update-pfp'>
                <img :src="store.currentPfp" alt='avatar'>
                <input type="file" @change="handleFileChange">
                <button :disabled="image===null" @click="handleUpload">Upload</button>
            </div>
        </div>
    </div>
    <div class="link-wrapper" v-else>
        <router-link class="link" to="/">Sign In First</router-link>
    </div> 
</template>

<style scoped>

.editor{
    display: flex;
    justify-content: space-evenly;
}
button{
  margin: 0px 5px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover{
  background-color: white;
}

.update-pfp{
    display: flex;
    flex-direction: column;  
}

img{
  border-radius: 10px;
  height: 200px;
  width: 200px;
}
</style>