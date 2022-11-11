import {defineStore} from 'pinia'
import { User } from '../interfaces'
import {ref} from 'vue'

export const useBookChatStore = defineStore('bookChat', () => {
    const user = ref<User>({
        id: 'F1R9tkmgDaS5xxydpYG4',
        username: 'ieronim',
        password: '123',
        currentBookChat: 'Ulysses'
    })

    const currentBookChat = ref('')

    const setCurrentBookChat = (val: string) => {
        currentBookChat.value = val
    }

    return {user, currentBookChat, setCurrentBookChat}
  })