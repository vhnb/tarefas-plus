import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw1Vbh7x6QmOndhx2gjm03BPoMfZRzQIw",
  authDomain: "tarefasplus-cbaca.firebaseapp.com",
  projectId: "tarefasplus-cbaca",
  storageBucket: "tarefasplus-cbaca.appspot.com",
  messagingSenderId: "869939087026",
  appId: "1:869939087026:web:2bcb5932384872600d2bab"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
export { db }