import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ISignUp } from "./types";
import Input from "./Input/Input";

const SignUp: React.FC<ISignUp> = ({ emailSignUp, passwordSignUp, setEmailSignUp, setPasswordSignUp }) => {

  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp);
      setMessage("User registered successfully!");
      setEmailSignUp("");
      setPasswordSignUp("");

    } catch (error) {
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
  };

  return (
    <div className="b-signup">
      <span className="b-form_inner-desc">Please register your account</span>
      <Input
        label={"Email"}
        type={"email"}
        name={"email"}
        value={emailSignUp}
        onChange={(e) => setEmailSignUp(e.target.value)} />
      <Input
        label={"Password"}
        type={"text"}
        name={"password"}
        value={passwordSignUp}
        onChange={(e) => setPasswordSignUp(e.target.value)} />
      <button className="b-button--dark" onClick={handleRegister}>Sign Up</button>
      <Link to="/signin" className="b-button">Login</Link>
      {message !== "" && <span className="b-submit-message">{message}</span>}
    </div>
  )
}

export default SignUp;
