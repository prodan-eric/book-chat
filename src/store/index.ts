import {defineStore} from 'pinia'
import { User, Book, Message } from '../interfaces'
import {computed, ref} from 'vue'

export const useBookChatStore = defineStore('bookChat', () => {
    const user = ref<User>({
        id: 'F1R9tkmgDaS5xxydpYG4',
        username: 'ieronim',
        password: '123',
        currentBookChat: 'Ulysses'
    })

    const userBooks = ref<Book[]>([])

    const messages  = ref<Message[]>([])

    const currentBookChatID = computed(()=>{
        return userBooks.value[
            userBooks.value.findIndex((book)=>book.title===currentBookChat.value)
        ].id
    })

    const pushMessage = (mess: Message) => {
      messages.value.push(mess)
    }

    const setMessages = (newMessages: Message[]) =>{
        messages.value = newMessages
    }

    const currentBookChat = ref('')

    const setCurrentBookChat = (val: string) => {
        currentBookChat.value = val
    }

    const currentMessage = ref('')


    const setCurrentMessage = (val: string) => {
        currentMessage.value = val
    }

    return {user, currentBookChat, userBooks, currentBookChatID, currentMessage, messages,
            setCurrentBookChat, setCurrentMessage, setMessages, pushMessage}
  })