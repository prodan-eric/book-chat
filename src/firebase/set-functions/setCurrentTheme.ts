import { doc, updateDoc } from "firebase/firestore"
import { db } from ".."
import { useBookChatStore } from "../../store"

export default async (theme: string) =>{
 const store = useBookChatStore()

 const docRef = doc(db, "users", store.user.id)

 await updateDoc(docRef, {
    'currentTheme' : theme
 })
}