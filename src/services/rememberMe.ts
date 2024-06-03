import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { deleteDoc, getDoc, setDoc, doc } from "firebase/firestore";
import { useLogInContext } from "../context/logInContext";


const handleRememberMe = async (id: string, email: string, rememberMe: boolean) => {
    if (rememberMe) {
        await setDoc(doc(firestore, "Users", id), {email: email});
    } else {
        await deleteDoc(doc(firestore, "Users", id));
    }
}

const getUserData = async (userId: string) => {
    try {
        const userDocSnap = await getDoc(doc(firestore, "Users", userId));

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          return userData;
        }

      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
};

const handleAuthOnload = async (autoLogIn: () => void, setLogged: React.Dispatch<React.SetStateAction<boolean>>) => {

    return onAuthStateChanged(auth, (user) => {
        if (user) {
            const userId = user.uid;
            getUserData(userId).then(userData => {
                if (userData) {
                    localStorage.setItem('logged', 'true');
                    setLogged(true);
                    autoLogIn();
                }
            });
        } 
    })
}

export { handleAuthOnload, handleRememberMe };