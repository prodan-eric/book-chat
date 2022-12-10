import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from '..'

export default  async  (bookTitle: string) => {
   
    const q = query(collection(db, 'books'), where('titleID', '>=', bookTitle),
    where('titleID', '<=', bookTitle+'\uf8ff'))

    const querySnapshot = await getDocs(q)
    let books: string[] = []
    querySnapshot.forEach((doc) => {
      const bookData = doc.data()
      books.push(bookData.title)
    })
    
    return books
}