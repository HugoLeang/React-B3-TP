import { useContext } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children, redirectPath, isConnected }) => {
  if (isConnected) {
    return children;
  }
  return <Navigate to={redirectPath} />;
};
export default ProtectedRoute;
