import { Button, TextField } from "@mui/material";
import Card from "@mui/material/card";
import "../ConnectionComponents/ConnectionComponent.css";
import useInput from "../../CustomHooks/useInput";
import { signInUser } from "../../Services/ConnectionService";
const Signin = (props) => {
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
    isTouched: passwordIsTouched,
    blurHandler: passwordBlurHandler,
    focusHandler: passwordFocusHandler,
  } = useInput({ pattern: /^[a-zA-Z0-9]{6,}$/ });
  const {
    value: passwordConfirmValue,
    isValid: passwordConfirmIsValid,
    inputValueHandler: confirmPasswordHandler,
    isTouched: passwordConfirmIsTouched,
    blurHandler: passwordConfirmBlurHandler,
    focusHandler: passwordConfirmFocusHandler,
  } = useInput({ pattern: /^[a-zA-Z0-9]{6,}$/ });

  const formIsValid =
    emailIsValid() && passwordIsValid() && passwordConfirmIsValid();
  const passwordsIsIdentical = passwordValue === passwordConfirmValue;

  const signUser = () => {
    signInUser({ email: emailValue, password: passwordValue });
  };

  return (
    <>
      <Card className="formContainer">
        <h2>SIGNIN</h2>
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
          required
          label="Password"
          type="password"
          error={!passwordIsValid() && passwordIsTouched}
          onBlur={passwordBlurHandler}
          onFocus={passwordFocusHandler}
          onChange={passwordInputHandler}
        />
        <TextField
          className="containerItem"
          required
          label="Confirm Password"
          type="password"
          error={!passwordsIsIdentical && !passwordConfirmIsTouched}
          onBlur={passwordConfirmBlurHandler}
          onFocus={passwordConfirmFocusHandler}
          onChange={confirmPasswordHandler}
        />
        <Button
          disabled={!formIsValid || !passwordsIsIdentical}
          className="containerItem"
          variant="contained"
          onClick={signUser}
        >
          Signin
        </Button>
        <Button
          onClick={props.switchFunction}
          className="containerItem"
          variant="text"
        >
          Go Signup
        </Button>
      </Card>
    </>
  );
};

export default Signin;
