import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from '..'
import { Book } from "../../interfaces"

export default  async  (bookTitle: string) => {
    let dbBook: any = {}
    const q = query(collection(db, 'books'), where('title', '==', bookTitle))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      dbBook = {
        id: doc.id,
        title: data.title,
        author: data.author,
        language: data.language,
        isbn: data.isbn,
      }
    })
    return dbBook as Book
}