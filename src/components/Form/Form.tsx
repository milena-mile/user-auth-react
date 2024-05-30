import "./form.scss";
import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Form = (props: {form: string}) => {
    const [emailSignUp, setEmailSignUp] = useState("");
    const [passwordSignUp, setPasswordSignUp] = useState("");
    const [emailLogIn, setEmailLogIn] = useState("");
    const [passwordLogIn, setPasswordLogIn] = useState("");

    return (
        <section className="b-form">
            <div className="b-form_logo-wrapper">
                <img src="/user-auth-react/images/logo.svg" alt="" className="b-form_logo" />
            </div>
            <div className="b-form_wrapper">
                <span className="b-form_desc">Find your favourite character!</span>
                <div className="b-form_form">
                    {props.form === "login" && 
                    <LogIn setEmailLogIn={setEmailLogIn} 
                        setPasswordLogIn={setPasswordLogIn}
                        emailLogIn={emailLogIn} 
                        passwordLogIn={passwordLogIn}/>}
                    {props.form === "signup" && 
                    <SignUp setEmailSignUp={setEmailSignUp} 
                        setPasswordSignUp={setPasswordSignUp}
                        emailSignUp={emailSignUp}
                        passwordSignUp={passwordSignUp}/>}
                </div>
            </div>
            <div className="b-form_image">
                <img src="/user-auth-react/images/marvel.svg" alt="library"/>
            </div>
        </section>
    )
}

export default Form;
