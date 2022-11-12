import { collection, query, onSnapshot } from "firebase/firestore"
import { useBookChatStore } from "../../store"
import { db } from ".."

export default async () =>{
    const store = useBookChatStore()
    const q = query(collection(db, `chats/${store.currentBookChatID}/messages`));
    return onSnapshot(q, () => {
      if(store.currentMessage){
        store.setLasttMessage(store.currentMessage)
        store.setCurrentMessage('')
      }
    })
}