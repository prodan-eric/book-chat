import { doc, getDoc} from "firebase/firestore"
import { db } from '..'
import { Book, DbUser } from "../../interfaces"
import { useBookChatStore } from "../../store"

export default async () =>{
  const store = useBookChatStore()

  const docRef = doc(db, "users", store.user.id)
  const docSnap = await getDoc(docRef)

 if (!docSnap.exists()) throw Error('no such document')
  const user = docSnap.data() as DbUser
  const bookRefs = user.books
  return Promise.all(bookRefs.map(bookRef => getDoc<Book>(bookRef).then(book => {
    const bookData = book.data()!
    return {
      id: book.id,
      title: bookData.title,
      author: bookData.author,
      language: bookData.language,
      isbn: bookData.isbn
    }
    })))
}