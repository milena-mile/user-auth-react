import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLogInContext } from "../../context/logInContext";
import { handleAuthOnload, handleRememberMe } from "../../services/rememberMe";
import Input from "./Input/Input";
import ResetPassword from "./ResetPassword";


const LogIn = () => {
    const {setLogged} = useLogInContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [rememberMe, setRememberMe] = useState(false);
    const [reset, setReset] = useState(false);

    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        handleAuthOnload({ setEmail, setPassword, setRememberMe });
    }, [])

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            handleRememberMe(userCredential.user.uid, email, password, rememberMe);
            setMessage("Logged in successfully!");
            setLogged(true);

            localStorage.setItem('logged', 'true');
            navigate("/list");

        } catch(error) {
            if (error instanceof FirebaseError) {
                if (error.code === 'auth/invalid-email') {
                  setMessage("Invalid email");
                } else {
                  setMessage(`Error: ${error.message}`);
                }
              } else {
                setMessage("Unknown error occurred");
              }
        }
    }

    return (
        <div className="b-login">
            <span className="b-form_inner-desc">Welcome Back, Please login to your account</span>
            <Input 
                label={"Email"} 
                type={"email"} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
            <Input 
                label={"Password"} 
                type={"password"} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
            <Input 
                label={"Remember me"} 
                type={"checkbox"} 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}/>
            <button className="b-login_forgot" onClick={() => setReset(true)}>Forgot password?</button>
            <button className="b-button--dark" onClick={handleLogin}>Login</button>
            <Link to="/signup" className="b-button">Sign Up</Link>
            {message !== "" && <span className="b-submit-message">{message}</span>}
            {reset && <ResetPassword setReset={setReset} reset={reset}/>}
        </div>
    )
}

export default LogIn;