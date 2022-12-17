import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const state = useContext(AuthContext);
  if (!state.authContext.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default PrivateRoute;
