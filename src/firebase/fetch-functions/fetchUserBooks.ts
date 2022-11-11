import { doc, getDoc} from "firebase/firestore"
import { db } from '..'
import { Book } from "../../interfaces"

export default async (userID: string) =>{
  //get user books
  const arr = []
  const docRef = doc(db, "users", userID)
  const docSnap = await getDoc(docRef)

 if (!docSnap.exists()) throw Error('no such document')
  const user = docSnap.data()
  const bookRefs = user.books

  for(let i = 0; i<bookRefs.length; i++){
     const doc = await getDoc(bookRefs[i])
     const book: Book = {
     id: doc.id,
     title: (doc.data() as Book).title,
     author: (doc.data() as Book).author,
     language: (doc.data() as Book).language,
     isbn: (doc.data() as Book).isbn
     }
     arr.push(book)
  }
  return arr
}