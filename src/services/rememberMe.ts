import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { deleteDoc, getDoc, setDoc, doc } from "firebase/firestore";


const handleRememberMe = async (id: string, email: string, rememberMe: boolean) => {
    if (rememberMe) {
        await setDoc(doc(firestore, "Users", id), {email: email});
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

const handleAuthOnload = async (autoLogIn: () => void) => {
    localStorage.removeItem('logged');
    
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            const userId = user.uid;
            getUserData(userId).then(userData => {
                if (userData) {
                    localStorage.setItem('logged', 'true');
                    autoLogIn();
                }
            });
        }
    })
}

export { handleAuthOnload, handleRememberMe };