import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../../Stores/UserStore";

const ProtectedRoute = ({ children, redirectPath }) => {
  const userContext = useContext(UserContext);
  if (userContext.state) {
    return children;
  }
  return <Navigate to={redirectPath} />;
};
export default ProtectedRoute;
