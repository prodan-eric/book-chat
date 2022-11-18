import { doc, setDoc } from "firebase/firestore"; 
import { db } from "..";
import { DbUser } from "../../interfaces";

export default async (username: string, id: string) => {
    const data: DbUser = {
        id,
        username,
        currentBookChat: '',
        books: []
    }
    
    try {
      await setDoc(doc(db, "users", id), data);
    } catch (error){
      console.log(error);   
    }
}