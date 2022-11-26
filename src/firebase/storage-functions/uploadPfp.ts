import { updateProfile, User } from 'firebase/auth'
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import { useBookChatStore } from '../../store'

export default async (file: File, user: User) => {
    const store = useBookChatStore()
    const storage = getStorage()
    const fileRef = ref(storage, user.uid + '.png')
    const uploadSnap = await uploadBytes(fileRef, file)
    const photoURL = await getDownloadURL(fileRef)
    store.setCurrentPfp(photoURL)
    updateProfile(user,{
        photoURL
    })
    return true
}