import { collection, query, getDocs, limit, orderBy} from "firebase/firestore"
import { db } from '..'
import { Message } from "../../interfaces"
import { useBookChatStore } from "../../store"

export default async () => {
    const store = useBookChatStore()

    const q = query(collection(db, `chats/${store.currentBookChatID}/messages`), orderBy('sentAt', 'desc'), limit(10))
    const querySnapshot = await getDocs(q)
    let messages: Message[] = []
    querySnapshot.forEach((doc) => {
      const messageData = doc.data()
      messages.push({
        text: messageData.text,
        sentAt: messageData.sentAt,
        sentBy: messageData.sentBy
      })
    })
    return messages.reverse()
}

