import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "./types";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ logged, children }) => {
    if (!logged) {
      return <Navigate to="/signin" replace />;
    }
    return children;
};

export default ProtectedRoute;