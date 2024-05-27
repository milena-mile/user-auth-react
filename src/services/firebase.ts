import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3E7_jh1Nb8d9_YYFRwLLG5Hj2a-92gn8",
  authDomain: "tranquil-marker-240716.firebaseapp.com",
  databaseURL: "https://tranquil-marker-240716-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tranquil-marker-240716",
  storageBucket: "tranquil-marker-240716.appspot.com",
  messagingSenderId: "183721488926",
  appId: "1:183721488926:web:3352188d87ae2b5005f40f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;