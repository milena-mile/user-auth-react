import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { deleteDoc, setDoc, doc } from "firebase/firestore";


const handleRememberMe = async (id: string, email: string, rememberMe: boolean) => {
    if (rememberMe) {
        await setDoc(doc(firestore, "Users", id), {email: email});
    } else {
        await deleteDoc(doc(firestore, "Users", id));
    }
}

const handleAuthOnload = (autoLogIn: () => void) => {
    
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            autoLogIn();
        } 
    });
}

export { handleAuthOnload, handleRememberMe };