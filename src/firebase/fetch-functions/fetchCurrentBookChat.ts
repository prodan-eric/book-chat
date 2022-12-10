import { doc, getDoc } from "firebase/firestore"
import { db } from ".."
import { useBookChatStore } from "../../store"

export default async () => {
    
    const store = useBookChatStore()

    const docRef = doc(db, "users", store.localUser.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return docSnap.data().currentBookChat
    } else {
      console.log("No such user.")
    }
} 