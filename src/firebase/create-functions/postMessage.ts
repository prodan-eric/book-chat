import { collection, addDoc } from "firebase/firestore"
import { Timestamp } from "firebase/firestore"
import { useBookChatStore } from "../../store"
import { db } from '..'


export default async (newMessage: string) =>{
   const store = useBookChatStore()

   const docRef = await addDoc(collection(db, `chats/${store.currentBookChatID}/messages`), {
      text: newMessage,
      sentBy: store.user.username,
      sentAt: Timestamp.now()
    });
    console.log("Document written with ID: ", docRef.id);
}