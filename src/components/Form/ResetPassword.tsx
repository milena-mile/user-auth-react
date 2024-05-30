import { useState } from "react";
import { auth } from "../../services/firebase";
import { sendPasswordResetEmail } from 'firebase/auth';
import Input from "./Input/Input";

const ResetPassword = (props: {setReset: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        try {
          await sendPasswordResetEmail(auth, email);
          setMessage("Reset send");
        
        } catch (error) {
            console.log(error);
        }
      };

    return (
        <div className="b-reset">
            <div className="b-reset_back" onClick={() => props.setReset(false)}></div>
            <div className="b-reset_form-wrap">
                <div className="b-reset_close b-button--dark" onClick={() => props.setReset(false)}>X</div>
                <form className="b-reset_form" onSubmit={handleSubmit}>
                    <Input 
                        label={"Email"}
                        type={"email"}
                        value={email}
                        name={"reset"}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <button type="submit" className="b-button">Send Reset Email</button>
                    {message !== "" && <span className="b-reset_message">{message}</span>}
                </form>
            </div>
        </div>
    )
}

export default ResetPassword;