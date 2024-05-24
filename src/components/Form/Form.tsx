import LogIn from "./LogIn";
import SignUp from "./SignUp";
import "./form.scss";

const Form = (props: {form: string}) => {

    return (
        <section className="b-form">
            <div className="b-form_logo-wrapper">
                <img src="/user-auth-react/images/logo.svg" alt="" className="b-form_logo" />
            </div>
            <div className="b-form_wrapper">
                <span className="b-form_desc">Find your favourite character!</span>
                <div className="b-form_form">
                    {props.form === "login" && <LogIn/>}
                    {props.form === "signup" && <SignUp/>}
                </div>
            </div>
            <div className="b-form_image">
                <img src="/user-auth-react/images/marvel.svg" alt="library"/>
            </div>
        </section>
    )
}

export default Form;