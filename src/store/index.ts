import {defineStore} from 'pinia'
import { User, Book, Message } from '../interfaces'
import { User as FirebaseUser } from 'firebase/auth'
import {computed, ref} from 'vue'

export const useBookChatStore = defineStore('bookChat', () => {

    const localUser = computed(()=>{
        if(window.localStorage.getItem('user')){
            return JSON.parse(window.localStorage.getItem('user')||'')
        }
    })

    const user = ref<User>({
        id: localUser.value ? localUser.value.uid : '',
        username: localUser.value ? localUser.value.displayName : '',
        currentBookChat: ''
    })

    const setUsername = (val: string) => user.value.username = val
    const setUserID = (val: string) => user.value.id = val
    const setUserCurrentBookChat = (val: string) =>  user.value.currentBookChat = val

    const firebaseUserObj = ref<FirebaseUser>()
    const setFirebaseUserObj = (val: FirebaseUser) => firebaseUserObj.value = val

    const isLoggedIn = ref(true)
    const login = () => isLoggedIn.value = true
    const currentPfp = ref(
        localUser.value ? 
        localUser.value.photoURL : 'https://cdn3.vectorstock.com/i/thumb-large/32/12/default-avatar-profile-icon-vector-39013212.jpg'
    )
    const setCurrentPfp = (val: string) => currentPfp.value = val

    const userBooks = ref<Book[]>([])
    const addUserBook = (book: Book) => {
      userBooks.value.push(book)
    }

    const messages  = ref<Message[]>([])

    const currentBookChatID = computed(()=>{
                return userBooks.value[
                    userBooks.value.length ? 
                    userBooks.value.findIndex((book)=>book.title===currentBookChat.value) : 0
                ].id
    })

    const pushMessage = (mess: Message) => messages.value.push(mess)
    const setMessages = (newMessages: Message[]) => messages.value = newMessages


    const currentBookChat = ref('')
    const setCurrentBookChat = (val: string) => currentBookChat.value = val


    const currentMessage = ref('')
    const setCurrentMessage = (val: string) => currentMessage.value = val


    return {user,
           currentBookChat,
           userBooks,
           currentBookChatID,
           currentMessage,
           messages,
           isLoggedIn,
           firebaseUserObj,
           currentPfp,
           localUser,
            setCurrentBookChat,
            setCurrentMessage,
            setMessages,
            pushMessage,
            login,
            setUsername,
            setUserCurrentBookChat, 
            setUserID,
            setFirebaseUserObj,
            setCurrentPfp,
            addUserBook}
  })