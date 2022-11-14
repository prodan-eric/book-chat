import { collection, query, onSnapshot, limit, orderBy} from "firebase/firestore"
import { useBookChatStore } from "../../store"
import { db } from ".."

export default async () =>{
    const store = useBookChatStore()
    const q = query(collection(db, `chats/${store.currentBookChatID}/messages`), 
                    orderBy('sentAt', 'desc'), limit(1))
    return onSnapshot(q, (querySnapshot) => {
       querySnapshot.forEach((doc)=>{
          const docData = doc.data()
          if(docData.sentBy===store.user.username) return
          store.pushMessage({
            text: docData.text,
            sentBy: docData.sentBy,
            sentAt: docData.sentAt
          })
       })
    })
}