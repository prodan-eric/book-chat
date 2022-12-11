import { updateDoc, arrayUnion, doc } from "firebase/firestore"
import { useBookChatStore } from "../../store"
import { db } from '..'
import { Book } from "../../interfaces"


export default async (newBook: Book) =>{
   const store = useBookChatStore()

   const userRef = doc(db, "users", store.user.id)
   const bookRef = doc(db, "books", newBook.id)


   await updateDoc(userRef, {
     books: arrayUnion(bookRef)
   })
   
  
}