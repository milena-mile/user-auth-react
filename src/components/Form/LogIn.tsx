import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLogInContext } from "../../context/logInContext";
import { handleAuthOnload, handleRememberMe } from "../../services/rememberMe";
import { ILogIn } from "./types";
import Input from "./Input/Input";
import ResetPassword from "./ResetPassword";

const LogIn: React.FC<ILogIn> = ({ emailLogIn, passwordLogIn, setEmailLogIn, setPasswordLogIn }) => {
    const {setLogged} = useLogInContext();

    const [rememberMe, setRememberMe] = useState(false);
    const [reset, setReset] = useState(false);

    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setLogged(false);
        handleAuthOnload(autoLogin, setLogged);
    }, [])

    const autoLogin = () => {
        navigate("/list");
    }

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, emailLogIn, passwordLogIn);
            handleRememberMe(userCredential.user.uid, emailLogIn, rememberMe);

            setMessage("Logged in successfully!");
            navigate("/list");
            setLogged(true);
            localStorage.setItem('logged', 'true');

        } catch(error) {
            if (error instanceof FirebaseError) {
                if (error.code === 'auth/invalid-email' || error.code === "auth/invalid-credential") {
                    setMessage("Invalid credential");
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
                value={emailLogIn} 
                name={"email"}
                autoComplete={"email"}
                onChange={(e) => setEmailLogIn(e.target.value)}/>
            <Input 
                label={"Password"} 
                type={"password"} 
                value={passwordLogIn} 
                name={"password"}
                autoComplete={"current-password"}
                onChange={(e) => setPasswordLogIn(e.target.value)}/>
            <Input 
                label={"Remember me"} 
                type={"checkbox"} 
                name={"remember"}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}/>
            <button className="b-login_forgot" onClick={() => setReset(true)}>Forgot password?</button>
            <button className="b-button--dark" onClick={handleLogin}>Login</button>
            <Link to="/signup" className="b-button">Sign Up</Link>
            {message !== "" && <span className="b-submit-message">{message}</span>}
            {reset && <ResetPassword setReset={setReset}/>}
        </div>
    )
}

export default LogIn;
