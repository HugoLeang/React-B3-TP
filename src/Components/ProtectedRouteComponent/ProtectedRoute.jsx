import { useContext } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../../Stores/UserStore";

const ProtectedRoute = ({ children, redirectPath }) => {
  const userContext = useContext(UserContext);
  if (userContext.state) {
    return children;
  }
  return <Redirect to={redirectPath} />;
};
export default ProtectedRoute;
