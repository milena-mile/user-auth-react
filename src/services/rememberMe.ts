import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { deleteDoc, getDoc, setDoc, doc } from "firebase/firestore";
import { AuthOnload } from "./types";


const handleRememberMe = async (id: string, email: string, password: string, rememberMe: boolean) => {
    if (rememberMe) {
        await setDoc(doc(firestore, "Users", id), {
            email: email,
            password: password,
            rememberMe: true
        });
    } else {
        await deleteDoc(doc(firestore, "Users", id));
    }
}

const getUserData = async (userId: string) => {
    try {
        const userDocRef = doc(firestore, "Users", userId);
        const userDocSnap = await getDoc(userDocRef);
    
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          return userData;

        } 
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
};

const handleAuthOnload = ({ setEmail, setPassword, setRememberMe }: AuthOnload) => {
    return onAuthStateChanged(auth, (user) => {
        if (user) {
        const userId = user.uid;
        getUserData(userId).then(userData => {
            if (userData) {
                setEmail(userData.email);
                setPassword(userData.password); 
                setRememberMe(userData.rememberMe);
            }
        });
        } 
    });
}

export {handleAuthOnload, handleRememberMe};