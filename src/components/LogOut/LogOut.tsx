import "./logout.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import { useLogInContext } from "../../context/logInContext";

const LogOut = () => {
    const {setLogged} = useLogInContext();
    const navigate = useNavigate();

    const handleLogOut = () => {
        auth.signOut().then(() => {
          setLogged(false);
          localStorage.removeItem('logged');
          navigate("/signin");

        }).catch((error) => {
          console.error('Error signing out:', error);
        });
    }

    return (
        <button className="b-logout b-button" onClick={handleLogOut}>Log Out</button>
    )
}

export default LogOut;