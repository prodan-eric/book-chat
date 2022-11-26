import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useBookChatStore } from "../../store"

export default async () => {

 const auth = getAuth()
 onAuthStateChanged(auth, (user) => {
  const store = useBookChatStore()
  if (user) {
    store.setFirebaseUserObj(user)
  } else {
    // User is signed out
    // ...
  }
})

}
