import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import postUser from '../create-functions/postUser'

export default async (email: string, username: string, password: string) => {
    const auth = getAuth()   
    return createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      const user = userCredential.user
      updateProfile(user, {
        displayName: username
      })
      postUser(username, user.uid)
    })
    .catch((error) => {
      return error.code
    })
}