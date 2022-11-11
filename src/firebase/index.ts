import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOO8f3FmmUV8ipZTWZ42Zd3CSEGscRXJQ",
  authDomain: "book-chat-70e67.firebaseapp.com",
  projectId: "book-chat-70e67",
  storageBucket: "book-chat-70e67.appspot.com",
  messagingSenderId: "101540322988",
  appId: "1:101540322988:web:77224be3c0782d03a18909"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};