import "./notFound.scss";
import { Link } from "react-router-dom";
import { useLogInContext } from "../../context/logInContext";

const NotFound = () => {
    const {logged} = useLogInContext();

    return (
        <div className="b-notfound">
            <div className="b-notfound_image-wrapper">
                <img src="/user-auth-react/images/error.svg" alt="error" className="b-error_image" />
            </div>
            <h2 className="b-notfound_error">404</h2>
            <div className="b-notfound_text">Page not found!</div>
            {logged ? <Link to="/list" className="b-button--dark">List of Characters</Link> 
                    : <Link to="/signin" className="b-button--dark">Log In</Link>}
        </div>
    )
}

export default NotFound;