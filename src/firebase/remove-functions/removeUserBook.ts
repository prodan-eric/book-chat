import { updateDoc, doc, arrayRemove } from "firebase/firestore"
import { useBookChatStore } from "../../store"
import { db } from '..'


export default async () =>{
   const store = useBookChatStore()

   const userRef = doc(db, "users", store.user.id)
   const bookRef = doc(db, "books", store.currentBookChatID)
   
   await updateDoc(userRef, {
     books: arrayRemove(bookRef)
   })
   
   store.setCurrentBookChat('')
   window.location.reload()
}