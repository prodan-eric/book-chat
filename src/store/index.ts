import {defineStore} from 'pinia'
import { User, Book } from '../interfaces'
import {computed, ref} from 'vue'

export const useBookChatStore = defineStore('bookChat', () => {
    const user = ref<User>({
        id: 'F1R9tkmgDaS5xxydpYG4',
        username: 'ieronim',
        password: '123',
        currentBookChat: 'Ulysses'
    })

    const userBooks = ref<Book[]>([])

    const currentBookChatID = computed(()=>{
        return userBooks.value[
            userBooks.value.findIndex((book)=>book.title===currentBookChat.value)
        ].id
    })

    const currentBookChat = ref('')

    const setCurrentBookChat = (val: string) => {
        currentBookChat.value = val
    }

    return {user, currentBookChat, userBooks, currentBookChatID, setCurrentBookChat}
  })