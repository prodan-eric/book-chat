import { DocumentReference } from "firebase/firestore"

export interface Book {
  id: string
  title: string,
  author: string,
  language: string,
  isbn: string,
  
}
export interface User {
  id: string,
  username: string,
  password: string,
  currentBookChat: string
}

export interface DbUser extends User {
  books: DocumentReference<Book>[]
}

export interface Message {
  text: string,
  sentBy: string,
  sentAt: Date
}