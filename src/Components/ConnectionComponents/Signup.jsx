import { Button, TextField } from "@mui/material";
import Card from "@mui/material/card";
import { useContext } from "react";
import { useNavigate } from "react-router";
import useInput from "../../CustomHooks/useInput";
import { signUpUser } from "../../Services/ConnectionService";
import { UserContext } from "../../Stores/UserStore";
import "../ConnectionComponents/ConnectionComponent.css";

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

  const navigate = useNavigate();
  const userStore = useContext(UserContext);
  const signupHandler = () => {
    signUpUser(
      {
        email: emailValue,
        password: passwordValue,
      },
      () => {
        userStore.Dispatch({ type: "LOGIN", payload: { email: emailValue } });
        navigate("/dashboard");
      }
    );
  };
  const formIsValid = emailIsValid() && passwordIsValid();
  return (
    <>
      <Card className="formContainer">
        <h2>SIGNUP</h2>
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
