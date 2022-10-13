import React, { useReducer } from "react";
import UserReducer from "../Reducer/UserReducer";
export const UserContext = React.createContext();
const UserStore = ({ children }) => {
  const [state, Dispatch] = useReducer(UserReducer, {
    email: "",
    connected: false,
  });
  return (
    <UserContext.Provider value={{ state, Dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserStore;
