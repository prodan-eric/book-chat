import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useBookChatStore } from "../../store";

export default async (email: string, password: string) => {
    const store = useBookChatStore()
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user   
        store.setUserID(user.uid)
        store.setCurrentPfp(user.photoURL as string)
        store.setFirebaseUserObj(user)        
        store.login()
        window.localStorage.setItem('user', JSON.stringify(user))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error code: ${errorCode}`)
        console.log(`Error : ${errorMessage}`);    
      })
}

