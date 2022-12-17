import { BookForm } from "../../interfaces"
import { db } from ".."
import { collection, addDoc } from "firebase/firestore"

export default async (bookForm: BookForm) => { 

   const { author, title, isbn, language } = bookForm
   const titleID = `${author} ${title}`.toLowerCase()

   await addDoc(collection(db, 'books'), {
       author,
       title,
       language,
       isbn,
       titleID
     })

}