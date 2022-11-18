import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useBookChatStore } from "../../store";

export default async (email: string, password: string) => {
    const store = useBookChatStore()
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;   
        store.user.id = user.uid
        store.login()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error code: ${errorCode}`)
        console.log(`Error : ${errorMessage}`);    
      })
}

