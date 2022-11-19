import { doc, getDoc } from "firebase/firestore"
import { db } from ".."
import { useBookChatStore } from "../../store"

export default async () => {
    const store = useBookChatStore()

    const docRef = doc(db, "users", store.user.id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      store.setUsername(docSnap.data().username)
    } else {
      console.log("No such user.")
    }
} 

