import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3E7_jh1Nb8d9_YYFRwLLG5Hj2a-92gn8",
  authDomain: "tranquil-marker-240716.firebaseapp.com",
  projectId: "tranquil-marker-240716",
  storageBucket: "tranquil-marker-240716.appspot.com",
  messagingSenderId: "183721488926",
  appId: "1:183721488926:web:3352188d87ae2b5005f40f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;