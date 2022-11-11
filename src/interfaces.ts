
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
  //books: Book[],
}