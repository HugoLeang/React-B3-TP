import { Button, TextField } from "@mui/material";
import Card from "@mui/material/card";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useInput from "../../CustomHooks/useInput";
import { signUpUser } from "../../Services/ConnectionService";
import { UserContext } from "../../Stores/UserStore";
import "../ConnectionComponents/ConnectionComponent.css";
import { useCookies } from "react-cookie";
const Signup = (props) => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    inputValueHandler: emailInputHandler,
    isTouched: emailIsTouched,
    blurHandler: emailBlurHandler,
    focusHandler: emailFocusHandler,
  } = useInput({
    pattern: /^\w+([w.-]?\w+)*@\w+([w.-]?\w+)*(\.\w{2,3})+$/,
  });

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    inputValueHandler: passwordInputHandler,
  } = useInput({ pattern: /[\S\s]+[\S]+/ });
  const [connectionFailState, SetConnectionFailState] = useState({
    fail: false,
    reason: "",
  });
  const [userCookie, SetUserCookie] = useCookies([]);

  const navigate = useNavigate();
  const userStore = useContext(UserContext);

  const signupSuccessHandler = () => {
    userStore.Dispatch({ type: "LOGIN", payload: { email: emailValue } });
    SetUserCookie("userCookie", { email: emailValue });
    navigate("/dashboard");
  };
  const signupFailureHandler = (failData) => {
    SetConnectionFailState(failData);
  };
  const signupHandler = () => {
    signUpUser(
      {
        email: emailValue,
        password: passwordValue,
      },
      signupSuccessHandler,
      signupFailureHandler
    );
  };

  useEffect(() => {
    console.log(Object.keys(userCookie).length);
    if (Object.keys(userCookie).length > 0) {
      navigate("/dashboard");
    }
  });
  const formIsValid = emailIsValid() && passwordIsValid();
  return (
    <>
      <Card className="formContainer">
        <h2>SIGNUP</h2>
        {connectionFailState.fail && (
          <h4 className="errorMessage">{connectionFailState.reason}</h4>
        )}
        <TextField
          className="containerItem"
          id="outlined-required"
          required
          label="Email"
          error={!emailIsValid() && emailIsTouched}
          onBlur={emailBlurHandler}
          onFocus={emailFocusHandler}
          onChange={emailInputHandler}
        />
        <TextField
          className="containerItem"
          id="outlined-password-input"
          required
          label="Password"
          type="password"
          onChange={passwordInputHandler}
        />
        <Button
          className="containerItem"
          variant="contained"
          disabled={!formIsValid}
          onClick={signupHandler}
        >
          Signup
        </Button>
        <Button
          onClick={props.switchFunction}
          className="containerItem"
          variant="text"
        >
          Go Signin
        </Button>
      </Card>
    </>
  );
};

export default Signup;
