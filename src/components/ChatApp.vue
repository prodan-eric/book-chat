<script lang="ts" setup>
import { onMounted, ref, PropType } from 'vue'
import { doc, getDoc} from "firebase/firestore"
import { db } from '../firebase'
import { Book, User } from '../interfaces'
import SideBar from './SideBar/SideBar.vue'
import MessBoard from './MessBoard/MessBoard.vue'

const props =  defineProps({
    user: Object as PropType<User>
})
const userBooks = ref<Book[]>([])

onMounted( async ()=>{
    //get user books
    if(!props.user?.id) throw Error('no user')
     const docRef = doc(db, "users", props.user.id)
     const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) throw Error('no such document')
     const user = docSnap.data()
     const bookRefs = user.books

     for(let i = 0; i<bookRefs.length; i++){
        const doc = await getDoc(bookRefs[i])
        const book: Book = {
        id: doc.id,
        title: (doc.data() as Book).title,
        author: (doc.data() as Book).author,
        language: (doc.data() as Book).language,
        isbn: (doc.data() as Book).isbn
        }
        userBooks.value.push(book)
     }
})
</script>

<template>
    <div class="chat-app">
        <SideBar :books="userBooks"/>
        <MessBoard :user="user"/>
    </div>  
</template>

<style>
.chat-app{
    display: flex;
}
</style>