import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import postUser from '../create-functions/postUser'

export default (email: string, username: string, password: string) => {
    const auth = getAuth()   
    createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      const user = userCredential.user
      postUser(username, user.uid)
    })
    .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    console.log(`Error code: ${errorCode}`)
    console.log(`Error : ${errorMessage}`);
    });
}