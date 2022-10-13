const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        email: action.payload.email,
        connected: true,
      };
    case "LOGOUT":
      return {
        email: "",
        connected: false,
      };
    default:
      console.log("User Reducer - Action not availlable");
      break;
  }
};

export default UserReducer;
